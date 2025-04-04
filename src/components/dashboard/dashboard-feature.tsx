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
    "5Gw23Uv6ExfCEv61aHBUp2sTrAiXoe9G38hZHbFkFnmTy2egNCoSmkqDdnNYaKVjxoT38bb3NHP6QFurSVBDcCst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KXTkMG9MkMqoK4JmP1NCqp7eFvxtk7yD9nRYWZ1KYoy3VBbRGqAaCiK81W8STkT3du76iWkVmcYDE739Rypyk7a",
  "key1": "3EmPyau6BDXkWEr1kUDYQT9Hcv4hLEr55HmZTAbTfvp32vKvi2PFUK7773b12aymzpvSRiqzaojeyHJShvZJjqf1",
  "key2": "5xwou1RaB5StHqNrJWTb3zdh2nDQjKQdwA55BN3QscaymSRBJgV2H8JWLa2ToRDXbvrjijMKDdppD2Hkn48PBiSz",
  "key3": "5oNTaLmGQ6twwC8jhxLHFBddCQfwB7dK8inJnebtCB8tBiPwxK6D7nF7nfgfCmaYU9DWvokBPG4YyVFzwZcJhhV8",
  "key4": "123tbXAbcERsbUFkXk8Uh1CjBUBvuenZeDEUkhuzzWkz1bWtN2ed6gpFgeMkGzxUrawxWcQnTTpnh659PZ3qaEDK",
  "key5": "4uzmDqUAsCF5UxKftDpBMfYC3Tho9upho428nhUvSdhoFXrnJWjrErrfUjk2gnFVs9Wz9xQuBsu1DNK6ZQ96HwNb",
  "key6": "qJHNdTwVuxngjaGdCYxH3V1GtSwmb6CV1wrc1cmGASN4npvpan5tv1b7kMpwbzFHtqrKf4mZXUEKS9fNV3gDXE1",
  "key7": "4QD5gY71Yc9uWtPthRGBJwadShU2yw9FsVysYAaPx1Nr8WYhxokDzyqG6C9G5fkX6t9PkAcCz3xNHshwPBv7fM1T",
  "key8": "2oZ8WwJgFzca8CfpN6nrH1ZUKRuwjiYTm7g5ksngy6kJE7anZu4CBTAWFoydbqDZjA4V45Pph8K4LJNg8T3dsKD7",
  "key9": "2KCdEQiU89CbAXUAjKrc2UoVNW9AuWTCDzsVUEdkgfDQM17DndBNFET1JYYnWWVcu4pgmAEX2sxSnd9t4RLMC344",
  "key10": "2kKGrJxRvMs7gm95HFwHLcy89iDrx9p8cDGkUgp592xHacDttrSckwnKaLeCDu9MXpBkBCMD47XxJNHVi45ubAq7",
  "key11": "2exLZpYBcxbL57pUTtToUFLiQQyqWmM9U1G6e8h3wWDcZnC4LSeho1ou8fvCR67WrmWHFGZRE9WNjPCXtcPJYkda",
  "key12": "5WbRNeJfQH3UjRuMocD9K6z3ktmRD2enswA5f9bKdivdVzPwjSkRe61RshujV7WawGqKot3i1hBYr4c7TPRKowh7",
  "key13": "34teChEAwB88XhHcujvnkwS1mWy7zNcCP3JqK2ZCWfcAgZVuwiJZyco8xkhqNZUKJs2EeT6iUUYcn3MA2pKL5sq6",
  "key14": "5NCgHa2MMgvWYD1vohXJBxV8xbsqPjxQDrZs5LWveyJgPEGvaEpH3CYWo3A4hSq3AjzdGMPJSAaTSHwKBZMUUvw9",
  "key15": "3GzC8eEfwXdkgSg5C3YTMmes2H8sMfB7ozXUsTf4pis1vJEQkWhwWCDQWQGzpZgsdggwGhDvBbeyfdxLL2Payu2q",
  "key16": "3wd3DcFW5DTaCk9t4wm7tsScdnY2QvoBGFjBu4XoCDuLVavNiLN3YMuYvr9sYRSJ1cS5eEAQ4N73p3moKyBNLgKP",
  "key17": "2n6RZHWwkK7QYVX4ZZZ2ejkBjhet8btN6ob1dcWmj7TbPxTqyCV5yjeBoKdCQ6zeFZuu451DnKaQRUTKqUvgUyPX",
  "key18": "5Z561ZPqPGjaEGao2kSd6aPAgMpCb7FJ2ewDmEfSegJX3kyQYe52V45QBa1kKJHnYefwtGYJKbry1Hb6PJqtfTif",
  "key19": "2AWHDrnnHpegZezk1fR5Y1Cpo7fhXPEcP2QXbgq8Wt4t8t1mRoTtJgAhWyq959VhijwBDpKSPQQh3x2cgix5Y1P3",
  "key20": "2rCFskBtmfTqEazMMVSugXKskSMeE8BNLGs66i9Vgs6orZX7Eq7ichnH2M5HUvcBmYfbEeXRhYGibvh88TnDeyei",
  "key21": "5oHdGdsV848fi1wynzvCBo6peP2hvnnzH2sscGyi5ExJ9dayAZ6aUnD51kzQPWm7t9222mPFctNhP6JHnxhn6ifj",
  "key22": "3xGuPp2JTzrALL9UuAAa1mZMCiaLeGSxt8UEULFMZf1YBfzLE1QUS3hFS2cVcnuYAKwzbMcWJxyPbzwJowTefSma",
  "key23": "2PqyL71TcoKXXi7QFPZGYStQeHhuWm4rG3scdfDAZixJWpeZHxRkJrLZDLUor5w6RLcY8q1AjsCGj4P3rW5xv2cS",
  "key24": "7Dn3dSy3J1DvsjStNh9hUSxv2gJW6VmesnuVpjWoVg6173FpLipyoRua5qs1C2Sn8S86TEQZAsYqDguC9Jg3A9q",
  "key25": "3mtHCFJW6QYDMprTFpLQA5RoQiX8LVsoquoxqWBrQxrAv4yBDuBokcLgMq8bJV3pHRf4PX9vefroh1YVCxJe9ruk",
  "key26": "3pFXabUdqXPJvE4r9zSKvGDYCoqR7qFwh7R3iTj4wTZZmC8VrhafPAFeEkjUcDfphdTMhn7LMMDGvgsEpRyj5PnB",
  "key27": "jMiFrCHhkkZhHXugdk3ZRaj4XS239AEgtFYEbmfvVqbmdwPaCstecmTvMhwLd9iGRjFf7mEE5jpe5EQRiybxKrf",
  "key28": "32jjUR4ESrTMPrgTFLnSWCnQhryDpfY3CDCy3vGsqiHw2so4r1ojgeKKM8LXXxuVyAuC4H2gp6W7TCunRcTMBy5G",
  "key29": "5ns4vCZMtXqbps7AfZHvNEssLb1wrr5tnPTBWnTzJUd27w42bC7C4QfiGLzbpg1oe27BPkDRr65Q6cXzdM4ZQF3F",
  "key30": "5WQUyuWnwxA6Uhz6XnmGahhEH8WxTuCBZZeoDc2sdAXANtMutSnB8zsFC8csfQqd6T9ViyeCSzRLNynm3yawsYQ",
  "key31": "47J9vZcrEMpzwMGhG8CVwhxkJGwGHfENKsnqAjRtphiwN1jMXE2HcyQDXo3Ef4dadSQ9dpHaL2JLUrp5KdiREedv",
  "key32": "4JaCeTW3agRX3zRK8gQWahpUTfLHnRzu42TMAXPR3U76zVY87KXUhEgMBidXy4G3tfBhXHHwKNphYEAWif8N6kTR",
  "key33": "4nB4QH2x7UDR1YSAqkn2XGZeGXSfXi57ZGAqyq6hiDjYWGq62KhuqdPM2mWjgffTzmhN21QV2EHjVDMiP5VGpmoF",
  "key34": "4vpsamsMajZfU6oTWPAXB6M4FHU9T2GwDUqnDJpVnWDzYZfnYZBwSVQ2LEjPLBUq5VeHQHY7bJBTKLse24JqefUR",
  "key35": "Tegq3J5kBpNfHLaTBdXjcQYBJajLXQruSfQnQXD4Myo6RFWxXxPSNJ8wLaSfQqjpznishZjA2G5msPd7ybHjhvx",
  "key36": "AWJTyFGxn61bFxrFZL89UAjDADsNjr1NTicrq3dXMMW6gFrqg5e8MG6XNJCSt1FyfJ8uCHmyVsqFnhw3mfzx6hL",
  "key37": "3sfuMeqfCkZZcpFALGkLgwwHpi9LW4XQjMMHLMS4i5p3kTcVdpVDS7DzhnKbBcJR8xrUaif2Pdaths7aYh5Zkd5o",
  "key38": "621Hci9XWzcuajFGEMpwvBqPDsBeKa3ig11NsZoSNLG4XrFQc5Wto2N7rmKTCRVNCL86R1EdoWgNCxg7qWpdQ1wj",
  "key39": "5Djcd3u3cnkyNCfox8VGLC9BqSqRZoxzw6LF1LpZjAEKKKZb5qRk5GewhsBo7ro613DBQ65tEXpwAeJaazxYA3hB",
  "key40": "2nxzyHNDnC97C56EB87aoDj9gpRPhgioz9bboeXe1P3vnhb5BhZu7ZZ1XZNuDBxbz2ULhRHNh14XYQZ22SgZBB6u",
  "key41": "4yDTkKHD8CKyehNAQaNMu8TG2Dtrnh91pmp9TsnGFxHAqipJ1V5EeLg4vUd3EAWbiDXU9xjXYUUHb2YmJa9qZZp6",
  "key42": "2WXk7qaEUEW6VxeC19eSBuH3uRnPUdhL4r7MoKWt4yrY2qGT7z1f51XaBoo7V1hGhpNZH6TrE7H3RM9mz6DmmnK1",
  "key43": "53DKVpomFdUQXg9WKPZiELwUvBHFKvbH1939GZWt3oD6uDFg7DC2soAcs1BQHyfzJpEUv91cHoZ1GFjcwtHiD4Ez",
  "key44": "5LqwgxQYWuhLqdfCUz7U6jtzrqBshcPDdyqk7TzhHcsMaVdji7GYxL4yNCNHeKtuqGt7U3j4HeJT7DT31x1p5WGi",
  "key45": "37Da3iPzXqJNMwxqz2ZFZ632fN281HzEzsH2Ss8KZM2puViJ3YXoME2KBhoJbYXERAnJpZjJbAPCHyafXxWcw9fe"
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
