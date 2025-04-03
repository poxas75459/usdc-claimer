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
    "DKZDFW82xv2NKYdnUNZdRDPtk3DVgm7QyDrYtWXL7UahKXX3gd7zrzPgnwTwYQJbtpMbEPH3tAEkjF7x5oN3fWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fqU86nuc3zqUjxVDW4KvS7cZKhWMsUWTeVrZZxuMAkZ6Jw1Nqkz1gbwJNYitTjJb6KkApjmUuLBCAXa9FN2p1oe",
  "key1": "5xNAnFZYJhmBc3SqGeGLFx3wUapBKKtXqpHX5Mxq1Bzs8Sx7YtzBk3mUtNwZWDUZ9k926dUALApmGEYwvZNJWorJ",
  "key2": "4KWfXpnCJqQDMfByTH57g9mhByBuuuuhhtCTWjopDR6zYxhQDnth1h8dwkMT1bDrepsYAYXyxP8dygLWV85ifmgd",
  "key3": "3WXFPB5sfh2nFayuwoXmgRewG4YKK191Yv12wKEqvZhdJ9LmgzyMtoqbeUSX7ywiNxHNxXLSD7WyWNgS9YbW5M8o",
  "key4": "536Pi7ytkodG612PriyosoUASGF22nmmLfbDHhWJ34yMKokBM77gDsifee8ACSJHUEW78dCwLeBqWiJXjqUeb5vW",
  "key5": "29WLWC5ex89Ru3UZgXNw5AnSefiLFDPDEgqE858pnqUfQcmgTJUqrhFagSEeBqypjpY2rauSb3QkT9XBfXoVBpGE",
  "key6": "3YjZQ6FnU6mNCpdHfTDgSFzp1kCLNvkwBfq4GK8PQunCaDUQkkM9XNEsZ2BoDZ3ZdfHeBssUT7tuMkk3XTgapBNT",
  "key7": "4Ug6GAtxaVKaZjnmp14sGxbo9x8cNSXLp3qYtg72uck2KcA4AChn5W1MWrBUwonUCYBdZASNxC4g9feGmrMyK2MZ",
  "key8": "5LcXhyonVP3jmTtomUVxkLUPsz6JJxCKfCGAYmGzSJAqSia95eesWbmtyu6iQWk6959w7HCcYLgp79qvDdnGUF1R",
  "key9": "2e35FunSezEhAb2njzwZvsYm5uaFfdzHU9yaWeMJX3Fw6mz6qvwtMVcEQAWreUXtD4CNuqFtgJ7sUc3HUo4QKRxk",
  "key10": "5thDiUNaqumsD78ZSjsnLg2Lvz9p2UQUJGUybLpmGTjmeusmEtjp2fS3qPyDFXYKof2Ebbif2VB4i82mhuFgdX5b",
  "key11": "545P7Bw1p2fbKvWDKoLnCwBm4DJn8YwZvSp6ihGP1wG5x6jACm3UaemJSrA5XCttFakLc8XWdrAR33w4VtrjMrFV",
  "key12": "5aBhhnEgaJAtx8pGq5bJm4Z8cPnbiVUky25gze8frQC3NRfeWBfyWNo41m2qfG5jVU2vktB9nEmgyjfTQf1Sq6Tt",
  "key13": "49w4kRKgnsh5Dndw6LGqoKUuDVXdkqSuTa522yPBZQXTYCgJNvaNCQ4Yo2U1BP6NLwBxGzHQvzJoMtCUd4EgDkVK",
  "key14": "siyEz6WtjrnHeoUqZprCqqRUZLHuAQ3Kgj6hus2KfqVmzPZ3NFnBPGxE5JSsDzBZfBYyrRgwJtRspvMcquWygj5",
  "key15": "25WEgpUitXABiW9ygGLezuYsHMMUrQjRvszRGw4aE7SiSByaWGH6DcBKkHvtTWcVfdbxiwTN5cyHLLUpVCzv8Mrq",
  "key16": "L4b2AbwadABZ7cf7W1DBbdyk1QK8XnSUpCGje3bwSA8RxZEWyd2w92eReCts4aZiCGibF99N5fmRwSXoApCSXit",
  "key17": "3LFeZXbu5Ff4kzDsdm4hx4aDuN3ePxXTSzcBk25i1b54CYJMPyxfPV9YaDV7y8fhazcgY6hWsJCrrVZ7UrUrp78q",
  "key18": "sJdyNRmVWCPvrwdB9Pcc1Bn7bBoKHfkeyrvpwTh4VNnwKYRoGRrdr859dj2Uve8z3K76xQ9MYuEt5JfNUm87zWw",
  "key19": "3YpFphf3oStcUFFmxawBes8fMDLaMd7cFPn3CgZbfwgXir6KYxZfRJVKFGedFATUfdK1xY3yQ9zntHEjYjYhfXxq",
  "key20": "B2dmZwoRkbf4cNkZZSwsJJmFf6rEK25Ga2FcrMAPRVw9Ge77wpk84wazFA4kZUcuhEpM15qzV9kTn7joVXf3YWq",
  "key21": "27PN9QYmLs5MkTpS64fd31BamaCPVyvRMoKx9b8W6jono4xNrrqQj7hUHRQ4T3hU3jV3ozzvPeaLFr2UryEHWLdX",
  "key22": "4uF8vDKGN9A2KiuervE3HeMCt55vDCW21hcdVco7CjkdhCJsim6KSTyUmN44EW64NM9KzXxkKLaRn19TmXQC4Pzg",
  "key23": "437v6WjKKNXCDgeYNrJtaJNcj4GUkBSGaFQMU4VFPJrYvFmZ3GzNiwYqekzhhqtwymB7frCbEeLK5UkLpeMSznyG",
  "key24": "9uE1NwJ1qEDEk2CeKVc9HRsA6uwfLGfVuTMB3U9uJ59uJjuGQfp6BqwiZgA9tbEdhnZXs9jsRjd19GC8EG56ceQ",
  "key25": "2EXbPEh9wErnmPSJ5T9sJUEjpdThUH1fhVe6YyZeWQRfAZooi9zhVqofTujLutCfVfVbAXJsmMu79GwAHnhVptMq",
  "key26": "53x1qZ78Z3fZ9zt86cYszaraKc1WNdfWPYJW5boC9XTEDees3dDYAUTqd5v57DHBuh3TJfxK7w12VdCcZ4t9wq6a",
  "key27": "3WQpYFzV1UuUhJfyzBkasyMD6FWoHKRLpen5f9kXQ5PVfTnkUUEWCEkYnk6wZU2WnjXNajtyATiTrurmDN8ee8Gq",
  "key28": "2NFFBcE5REJcWWWbxJiRQM5JRWkAJyvu6a62HgrjewbHafpH6FUZeTQd6ykzUXEVxUcRHTeHBb2i37yqVSH52Qch",
  "key29": "6eVFb6LaPuDaZfRNqHHKbVtUk35q8hkwNPtoPzXe6sutAQSF4kxzQ6Nb2xyzEYEzvv5XKJhQPm8Dp1aLqkZcfmK",
  "key30": "41V2D4i82q2vLEKSesbvm5UQPRBpTRXKNemcRweRdhrwFhFSxUqACsxhbtqXzm4HpMaAWiuGCzEmFW7GoakFPstG",
  "key31": "5MKycNVHYkp4jaCNMnnCF3p5S1oVk8f4smcj1bedWCXrtQ2xPQgyW92nqcvxNzbjy4WeGWQKze4oGj1o9uvCydfz",
  "key32": "4TKrT2A8cXofCxW5pExdqe9RYKP3tMmkSLufvgXLn4at487uE4kYL3KDLqPYd6X4PedVsnSSCB8U6dCNco6ojjNk",
  "key33": "3rsuqhwb922fEdTFCrUoxVPHN7tUTcf5nBTy6bjdxz6ecJo89SscGtREUQNv8wb1TVik3bKZ4ghtKhC654dmQtBJ",
  "key34": "5mH9vrYBtUPey4U1FWv4yAkPsAdm7rnazm5k3LeL7PaPmqnQxuPhu4BJNvA5wQ5jWvwNYEzFRxbb4AQoKzyrsu4S",
  "key35": "3d1MtQ2VfkvvyL398sH2SZZx6diz4euu7t4ydjMGaBtaXvhqPP6sM1f6PD9zz2jKWS21n2s1YuXAoi4Zp7TipoyE",
  "key36": "3heFWgjcVgrQQ3LjyvSzqtCQ2jMhfmGBAFSGjmbFzrxrdhcTnpeseWJy8p4PKanWr7Vq9CRH9QyXKJWsrvjAKL6h",
  "key37": "4Zm543Rv33UgY6dLJx6S7b6wsYs66WDCjC4YcAzBoGrjLGPWuht745xerjTcVPt97ELhoij1NYwXV8SnxAYucrVv",
  "key38": "2samHZVCkdpd7YrYBGh7Muv2x9LipotRHThnP254PAvAj4mBGc229cXdU6xMheNXhPAX8Yzp8kER7ssfUYfYYkHe",
  "key39": "b6kCbyQGhpHtSQnn3jHzmyZG2fzRJW1u3jg2h1DMoCAhHsQ1VF3upwJ5695ErKnuHeTjR8DJbA4zfqDp5CtxeFL",
  "key40": "xP6K9Wwkz2JXzBPJZFp3MaL6ptjCLSNkxHkR52sFxLuEfAdg2ktgiQFEmZdy2G4v9XRMtsCkZvxfdgA9GT3dy3k",
  "key41": "eubuPmkKjQbDynqWENL4maRhjfRCmPuDDBRkBKtuH6GtJpEjnrMiHYM5tw7FPnDiKnbZ4UNpYQFXBJNL1CRTSxY",
  "key42": "35pUJ5vPRuayCwvr3hfvsUGyr5MZRiFr2t6dhYjCiEeE4L6A5BzonzUr5GGCA673f2NJ4ewqy6MNoKY1ikYsmGW2",
  "key43": "2MxsLUcKtFgn1VNPoWS2WkF9KWzXGASKbnursTGaTZbdmgWkBQXrtkqqzqrMZuPcRjattxVoyjjGYeL1TTvew6Br",
  "key44": "3HRYvUwLbsz5udFu9xsKegMHQDzYPADRJnECW2AngeHR9UdAtQomgaTS4g3ce5dT1e4SBowH2RXFF7RYTQ4emtoS",
  "key45": "3FQB9Y9nvjjqx8paBSPEW7sGAPMnbVfgFuPuo2ugdhGzFcN8sqELiZ34RsqDDDga1bcTctTeMEKMDUAuZpP6bpTD",
  "key46": "4RZpjhrcdzr3EpbsMT5LzYFRR6ZTGz4ySexXXUugFPxQhTm24qeNALt8sy7H6muTHRBoJZVe2rfef2B1yzMoTL3j"
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
