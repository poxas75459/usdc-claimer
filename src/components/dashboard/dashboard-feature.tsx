/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5bD9ML128ctNGAxPNFWu6UDqgw7R2oKhgKJLtByTNib5vpHbLvBMs927HZjRwUUFYFYPqnNU3hYy1uGmADsyNvc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EQtFXDMRCLzA9jyG3Gtn381tGm4zSGB4so32LLMRFFvybJXBewhzEAP1yhr3ky7wmHeSkDTP8DxFkMBRzti6WSh",
  "key1": "53DjVQb7R2Z4P4F9RV1MeaohfpBbC9PyqzLMeDzwuDGE9z6X426aZ1PrGM5qb7ynREp29MbpcZiJaaHopF9A6V9H",
  "key2": "v2PNwynViWWGmzaVhd83tr4b719aVAUPKtq9pMK7m2ugoebWvU4XyNWRLin4ttZ5A6bv7janEDvyL7H9UqunLE1",
  "key3": "5WhEBNJFqZMSfu6QF2Yc2Homim2Uyqrq1uSyU4Hr35io6HDh11PhGd8tZmBgMSUMFgNGG2bi79Pg7KoTD5tvijpj",
  "key4": "26gS3UrEHmtvG8nUGMSL6oqeg4aKenkYMHPbq6mNGBbbPVUbJnfvuVMYQChvKgWhPaNSsf9vFHsrQTSMwRzqGHpo",
  "key5": "3YKcUonQPBCAaH5SKu2oHMTmF95fKU3VGr1w5SZBTuKBauuK67s822MAkhCKegFi4KvWroD75AMLUSQb9XG3G4b4",
  "key6": "5NqGgToZwvYCejZb3GA12UE8EM6CiiG62i2sxxF9xUEmB3oCkVu6iaoHrhjf83GaUvXfmyLkyrAB4APE5LBQda32",
  "key7": "veFunWJADeGPJqKLn3gfaWjwJnYuZwAM7wtnNrAVc6RM46NmWkgeMwYMMv5E8wwJGFb9gfHWcXGPkuZU6y9gMU5",
  "key8": "4V6AEiYWXKC2m8tJur5YYZaRevXXbyTHCYYDdp7jxSPJxQL1qX79Z5Sr4dqvztiXsVVsa6q4wWbX7wTqqJfjuLTL",
  "key9": "4hfbtXRFGrzivy2wZeqDGY2uH7NXVYNecxssc5HR14Ze3APMFESNFb9mj8tZCXi1cWmK7ayVGJvoC55WCdhVRZTc",
  "key10": "29st5zVRxeyya19Lmy4AubYmk7M6hRtmRnyNrgw1apteLTZYzGQ4KXi35rJgPonMYwDWp6ULRSmzo2CrmoefCKv2",
  "key11": "3JHSTVBdzKLCtK3Wbbp1QAFfJQLKP2dVfk4QN2d3rKmKffFGpoxUcapt2sBPoStkR63SC4Tq1zjfYXacUiQBDhvk",
  "key12": "257xeeKRxHbS9JL6dKMxncfVsciJ7YDisocWDKn1u3KFN5MoDgcp1GiQMf3VhGSUC5fLnGkxeQg2YuyYnTBHsiq3",
  "key13": "5Aq2SMRFWvwMysT2XEFxwDGUHtNLFHCvaAXvAHXeAB92r5AjBJkV25cTZoRsfibwffnj34Gbhr1iD7MihKrns53J",
  "key14": "aboCEcM3M3ySA6b3Lio423T7kTD7BwTc3RHh8qgFZajp5buj46s2oH2h9cQrVEDMRGK2SvwxJdqjnwapMKyWyyK",
  "key15": "bHJ9koNoNd9n7SoGdQrDsx4911kMi97YKxkkY7WtrqZHakKSryEv3r6hAkRUt1QKLomUea2GeN8EEdXiGWBBVG7",
  "key16": "5o62cbXWK1pNUp6knvnxqMcueAptEDkUsGaC1bnCS3xzYg9vvY7mhY8NPxh7R95ARHTt1sTVSDRHLwfgQdnxkAFp",
  "key17": "5SXiCy75wcP3oirY8agTacvaSvF1xQmUehMMdHC5mPXJoBmNE7Qpbx3J6PHEaWM5ZxrJTq9SZSWAnLrU5nc8vDe1",
  "key18": "3PstNXVKxMNuYfvECDooHxzX5r9HNDh9DHU7z4PQRtd3jSAEY4Ef3Mmq1do57V2kzDHZTd2HAR6qMz7An9GwbPb1",
  "key19": "oTv6PtRRCaEC1UExFWHsorRkPsDdro8Lyhz49TRMjUsgapJNUxsSsApJJd7fPs8NQipySpJRgCHrkEVAQqj6VjZ",
  "key20": "2JSJxTRaF25kNciKr27EEwhiT4uQ3hyciTYks7Lt7DasWyWg9nmedT2u1vRkjoAYDb4o7LKaa2bAvb7ZLcM3hLj5",
  "key21": "3JpPc1qBvM6AdnHdwjGstnw4Mw7QmrVabQ3zRjUJaCJmLTQT5omEWUVFkSRYosLwZjZroKHfybVVrQcersuRBLRz",
  "key22": "jzLmLvYcmXwxW5NbcyEU7tPx97dTdpQ7jjtFY1cxazZDc9JLHufdmBKYXZNyJDU4sNbrw1pkUwC54GcDW45iFzQ",
  "key23": "kAFBgU9gh5Lt2vAcoa7wBLdZapAuqDGwSEvvAuWHd78pJnUraDagXKKz8FLHtvASh8JA2jmFEX1WV4wHC715TRu",
  "key24": "21mQsuKJ9BxiNRQZuFddwk3gXh1b13gbHya7AVTmYU941Htb91NjgV7mNtsKKBJfXw9nFvuyEBjeLbHAvBK1LRQa",
  "key25": "59nkgShG6SkyQmdMmZV3HeoDRvKStheySa7RgHqDvxqZX9XccmuBbffCg8Va4XrpwPgJsbMnQa7Ux3ui2xvNgW2j",
  "key26": "2pPWRtGGH277bBW7HZP1iNcpJPffxtYBBCrXCmYSUbH6yKmQJWUyaPTT5B9UdW5D33pwgatHWdJrtChqbpqdemg7",
  "key27": "4vEhE4fsjoQ4odjgCTkVW4UoZxVPC7yM5VNSwGKSCSZcoSw6bgsAJoWYc3KA4bCDejeCeJMM2bPAhkqra83Fuodi",
  "key28": "3PHw72n7AiQXRxpVzF6h7vxLg2w7eAz7z4gXJxaX5CffNa1qE8dCHKDjD5SMt2ps7tbqKXhDLd2wvo5UDST8Bi5v",
  "key29": "h7XPQrHWoMk6qiP1ibbgLpycgX7eJ1Sp1Ws8QuvdLapGSEsv3vwe2QoTYYoczPvVdW1jP3XF2n6MjZACdV3dt7u",
  "key30": "4YPsUpVYkMjyeRNVwRwSbKPstUEoVUiHLjZqprmyyScC6vnS4dnvpChXoF3y2oMsRt7a2pRQy6mReGLHXCUXsbhb",
  "key31": "5VZwdpQvqDGcs1SfB59hdPyMwGrKmYaEVYhZdEi87NKCaNKAbeAbq1Dy4bQ8TZmaYCiMKr2VksGHQnCWjpqoB45P",
  "key32": "5DxD9W1R4JzvUgyqP6rfVYsH5S8wXgxiNPTQ8WYuGjQ2hQvFPh8qYN6vw4PKqvp7acckTzvnSHNN94vV6gCUm8qS",
  "key33": "5DBbrmUdzAb2C4MQddQptJ9duN5KqwQpCtGFJsyE7dYKBu1h5oFakwQy676EMon8s44LkCbPBAg782noHVxRRqMY",
  "key34": "2yxJcSWgSSap1ppzpdWAQRnoW29SUzQ95nCeeoXJfhf7jEWfUzZgzWUCezy4Wpw3PpzPnnLPGmGmusimCqWBvDJV"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
