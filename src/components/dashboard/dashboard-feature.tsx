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
    "rdnBMRsHGJF2j4AmQq7BoVtbssAxocRnHCcv9R3p4uMngKeppzANhNUy9tCaTxNmvm9wg8SZPtpLRY4x6TBoFeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HmMxyLG5wpDX2C4dACTcQxTpjp5xyVQMkfikCxYKE5bj5nnM5bXo7NUwmhU2QfU1R8Y9UaFXryf93JG7qaxFYyg",
  "key1": "3XTA5g9yoYrQEuMMkBCGRCm3nc6jdAf7EbHe8TapbstwWUGK55b8WhNAE1Mu7tGjxf5tA3raHQ6uitqGiyNq1F8u",
  "key2": "L7PKBZVpRd7HZXkrPgNxj1wahkAxKXVdTpVDhWJgUbSyq8NNMZcG6qR6skzDXcKjM3PLAaRjtcoi5C7i9YNBzkY",
  "key3": "5bNA4Ab5Xg4tFoxtrmwR5AdZRJvxcsiAPSgnJacAzjfaDFcuAqaqxwGC4nNhPZ1GYLyZa25UxLSpxU1VCkhTs51k",
  "key4": "3imkqUBTGHRwpUe8cnZN4JxSFZq2AqhUtv9mrGwvb9yxjZzRaBh3VqMXAk6RhMwB42b9fY3awiZFbmeJgaR8eyvT",
  "key5": "5T9aunX7MW5kFhEnrbHoLtPXEZbRnmXcjcmSSKg5nHTtrzi2ihHv1DjL38gnkAF1bTc28bQTuRMPK9DWkk9WUtfN",
  "key6": "qdRHvLCbusAMEbT5geqwF8Qjzw9gBpBz5T6bUNrmfz1egy5LMza6CB5h6mSkNFAeucu1SvkXSn1DPS6zvhuirTC",
  "key7": "2vZqPCgcXZcjrtSvFDnmNnbokbNiRDfMWYrLhkmVsYf31X9kM9Sn4UiweqSaDWSg2infy6r1L5986UCc718GxK4R",
  "key8": "4PLVZwRsAHJJ9kDiZ8A2H9JaBU3DjcL75475aGD39N6Aq93B9Km1QyFzWvJKQHJ2db1SCJgWpCX6kHS3e6SS4W1n",
  "key9": "5T7GKKY6NFjXduzMoPv6fdvkE253LKLYvgEkwcHAgEuHa9Qoh19EwVP56ptWy9HqFPGQhJFqkvXSrUqauKUxPUVt",
  "key10": "5xwdFPGV2VxtrQc1zD9AijjgEoNYWEWsbsYVncy6RpibALv82E2vYTMPcm9FJni2ngmxDcyXJMrc1D9EwWgVaAPR",
  "key11": "5M49QghzxP5fyLEco2Ld1LHhWpJ8BvzsnGDRNTJUHHE56YNsQRKABGLL4pBX1QFJbHy2ZcLoA4EeZHre7yXNzmKn",
  "key12": "4iCWBWC1cPQ5ATsDAL8RafUjaMN95tJNyrhAmgswbr4bpXeVLHvKNPMnHwtVT1TBp1ts8KfM796LDVLeGGv2QHco",
  "key13": "cbh3z5ZgsAquFKPzEDGfZdfd3LUTmiNXAmNYoRzea2V5uTYA34VHUF79xiussfzytQTAczmot5qo2HHAP5QnEr8",
  "key14": "2gX4dwMA2RGcispgr2xoyxwAXSqMGGtZwXrWhPt399L2JLvDhj7hA17fR1GQSRukkUbYBSHyV3jgHPX8FjMgAes5",
  "key15": "Mici3cEVy775WJywZvkdTBLmDwj5NBtrgX8XGkBhDpGj15yAtwN6CHNjnRTKrPEkQScHp2sGnE8TxJabSwPupKp",
  "key16": "38RHpoqmcencXPFVMDfb44gUTbTYVjuX6b6KVmxXDBZ6NA19jzcCuV21E1nDhyKjRbTCLcDGPa1NnEmS7LeuDV3X",
  "key17": "56AtDFQdxRrMawNgBbERMCXytzt9uXQkENUMt86fYCiRKADqHj261LkuKSayvGN7RdgkAPkXTsxaFgQpvpYd51wY",
  "key18": "4UKgmn4j6BBYAh2BBMrM2KdeZumH1iru8K8p314H4hCep3zGKPweh6Sh1XBykg1zfUyM6YTNAwxAYKUuodhtE7U9",
  "key19": "8tNQQdg2Uy31powYxpdRDU63mREQhY9ear4FSGZgHrfJ4KTXN5W8qTcjtfuNYMj2ejxsRE3xZFFyiwQBRbPLyYg",
  "key20": "4HbaGA9tkiUsD8jnUejx61SoAguNYVZrwKvB9w7g73MjXcS1fd1mJAi9NqJRbvYhpYxYfSrxsBKgWYhfci82nFpu",
  "key21": "4RtyWLfz5b1DYxxpwkuur5vYA4pARwmiN1qvrVtfSNkR8uEu9hEkvpPJC5UiJhMph2mEHghh1qUiBqvApY5f9uss",
  "key22": "57jVaQDo8iW5CN2wPpjFmNyHWbpyDwU7698V3vR46QuRTyVj8wghM2TDtZhLdaHhCqyAxWhLpoxUPq8K5aHhoKzW",
  "key23": "5cPAgcqVwWrusKNSXiu1SzTihJmQ6ZxuQNB3iVigm4scwYBPejkfiXKmFHUGvZaH2hQQU2iq3fXHyidi7YLHGdAg",
  "key24": "5dipswMjYa53nPhp7mVfVnb5XDBfRefX6cd52DCqtcQCpfJVqqKKCF2WqR6CgY3vxbrGrPjoLHqxR9tDUkjq3zb9",
  "key25": "2gMg1P2Vy9GcyGvMtyHG1ntoYTuucLSF5wPksDBWo8MA7F2HPDq4G4xtbaMziRFQg6zjoCBHSCkNQzwy4m3wWxUb",
  "key26": "5WB9tg22aL8bYTC6yuXQmHmKe17RWyNKGi1acY5pGQH52B6itZUbFdgcGoXU18aAyMEbaApt1sSLMvM5cDR6KU8i",
  "key27": "BP75xJrdXPXsMR517LgwHw1yyGdZNRB2RmxRCTdSbEAu19mc3x3UQofyxpRD7hZX2TPHZse4NfLZ4h3Gw9r2PdU",
  "key28": "RwBp82826iHoQmAq2Pv7a5mS7eVfdQfSnhECPwprv2i7NbpXER6E4WaWgg242w5GYhqjgBEZYsSi9rDwR89dgXz",
  "key29": "5MFbztQYWKPCe4Aqh5pZjp5ixmoqMZct83ZAbKbhmFSpeh3BT1aWP9CmFNj9sqbioQEryrM9T6njpJsLURxx7B1e",
  "key30": "4KokG8Xt9zEtrRipSuvBf9im1T9bprbuMcd28APySZ2t9Seno3aaGiQWMjZD4XmcEUbC5ELVxzGKJb4tJsxUfBD4",
  "key31": "3QQHaDZhvvei3NH99fsRprSxH3Yp9KchHK2DmMyAKFdLgBJAHCD82eA9rcZvABHpv1u9rtGDuF7kUc2mdK9Wgshv",
  "key32": "3FSEnTfNMt9ucAZ642NcLpEgp78M76VxUhWH3fc5A3cXon7Gz2qRd8eSYDAmHzjMe3dintEzU4aiBt8NUHwUyxdw",
  "key33": "5RVJrcpeVy4uyBsRabM625zx1pqmnNNPpt8J29jzvxARGbbUMF6uEFZizF2WFaobjCDoyaTkS7Bw2WWDSa87ZY42",
  "key34": "3UfceFqjGRqrvs6pVoBQC4JqcTrvJVfqSHgaseoKa2mV9skfw6CEph59bGyT16yV57qhPD8poV57DfQRCe5nagw9",
  "key35": "3L325hnp44AFHkrVvRjVp9wktLZkDqwZG2WgSYFmnvDKC6384C7EQfbCmX6DKyhiVTrkzxxQbPSCdcLL1fuQCCKz",
  "key36": "4izwWBAtEbSMPHeBpYfoc9FWUBKSN1Sx8o2zfetWY5ewjGAoorTpdDq5u6gLeqJd5Uy5sqz3JFXPueHwQ3LDvbCZ",
  "key37": "4e93SNair64696d87ZnCZsGWg1L2X6J4f79MBy8MzPckuakkjjfckc5tQ9LtpYNuMnfpkHJ5dYyW6EwGLtcLTExQ",
  "key38": "4roahy7MtBT1CfUp138a9dse2CmrKnK9DU4PaPi4yjDjoTejcnaFcBTgenbCLuLuh3qxJU99i9G1VmF51GQEmgeP"
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
