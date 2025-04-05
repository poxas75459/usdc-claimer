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
    "3vPs2fQYeusaHytSoahwjkxBx64wsCWRzM8hgDhuqfk37iwraHkZNXVhLfjjhUXsBxrkyBb1CGQ7FoR4AmNfZFPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w7gF5YTZpDWyqoRdUPpUAzka6sZ1BqeffxYhdsTjtVrbf6vFHrdobFUGH7eCbYJyC7dPu5AQiCKjkvAkeXYUfYu",
  "key1": "qSSJJXVyr2vCdH8LoRVTEnpaZGCETi2QyW7j4bNTqwf59MUm5rUf5johDrXTxp3YY1uduLwokfUwRbkQMqiVhBb",
  "key2": "5eJ7fMQkZsWxNLyDmMNxBoRgvF3iWz3fgNnf3txqqx1oz3fwi1oeesxgZswk38Ext2j5Vh78rWqsNNPoggxBp7E1",
  "key3": "JhW763iCbrZGQd3VfgmVocCNb7SDRoXx3duLDQgFhQYtSAhuLJqb9qcak7A8WkAUEECL3pKWxZEAiEvSSe1bfkU",
  "key4": "2GdYKEL7Teeo1oBpqab6VTi7YjHbyMUp2Yb3eFxrPkkzbvmp8t4DhXiyztsPmvRLJvPDL2AXMTuKuT5LLkfQXMLC",
  "key5": "3CzvbJTyAUwv5W97Rrd6uCfi1MHKRfsShX6mLr7kx6KFSvNgd51kH2DXCd7FrcoBzQHjFHCxXcBYBDmkSXowG8JD",
  "key6": "85ib46ZVrgFcyr7HUTWnFbTVHgYnDjcuMtEGv2MeLyw7V5pTxVYY89DDogKsZXv2gojnayWpEeUTEmnyzEbVYtM",
  "key7": "4ggtWon4fdMRRMvPMELejtJ9xrgL6AVF8sYcTdK82QPPmum1Tey2741ufEDc8yrzvJHwCWGm8rhWbusJfJHNJzf8",
  "key8": "2saDV2VQ48En3dtaLLpgSx2qtftEeE8hkyoMHvwKaEPsWRpZj2hcRcbJDqJ7qtPJZyXMAyUmHHXdtBV3Lx5Ldwjz",
  "key9": "5tMzE6EiAEsUYGAZMBP9AjZb8jM3effjLeHSGKppaYSDZk1n3E949z8x3EQu2QWXubp11faJEQn4QKn4JJucHoCb",
  "key10": "4ct6XxarFLgEAybHDnWuVFoXCHfjH1vGTCT4PSW6ZDKRJTCJsJDqtbygCu7tKwPD5szzvdFwqGcZmhtyZ2notQ2P",
  "key11": "46v1rCRcjEUoBj5NgfSVF48LGGyvPDdbJ49rPZ5pRhamtqjUcmmk8E55B74cvVYDUgmRmHSyg6HdBj1Ee6sBPmV2",
  "key12": "3wp6F1xiSGYSmYUDKfAwtCMLKrc5DVXCFQK42fPSATFWs4MdWAiwU7DVJYYXzXSDdyzPebKdFQRbCmaAGQyFMY9o",
  "key13": "2v5VcxvH5MJqcediSeqNgYJ2LDhnjoYhAvA7tStkXs41uAMBXyydYFxSCufYuqUx1RaNuNmuCEAnYEx8LQTp1zHZ",
  "key14": "5t6ZyX8S7fH9zE1NNSiWxynZ4VH1vzi1HcT24bNoUapmcGGbvUVnokuVJd3RLqCdZzEUZBPXT61HaqsdqzZLR4Vd",
  "key15": "5rDwBpWDT9cqEWCteSnXEmdtjtxEpnkNS1GaQtHCF8ENPF7KAz744RXGoHcqVE6WhC9GpSXKmhnvnYUYzfPffSJj",
  "key16": "2pdqBePcs6wZa3HYQLkDHeR7UMeeqmnhsNa3nsqeRANQstD5eSDp3XnRun531shZsYmVW3sZM3Xzb5Xsw1owcKp8",
  "key17": "4p7irnLRc47THqvDsohCN6dzfNnyN28GAEJ3rzaikuCFy8ty5kKa2FKSMHSBWuPKGaghv5WgbHDBuYLehBRWrkwF",
  "key18": "5JLZRkNKtHqsqpzfLjYPkGLvYMGxqjBaiDmbjkVMwarjNmY86PJbeTRk1oFRosL9VNFAZBAqy2ZFRWFDCHgZvhod",
  "key19": "3gyh35f55oxqukpe3pToc5GkJjQ1uGhb3ymoh9bdHSH4JNLHSABFhWZ9f1Rw1TTtZBA3UGs6NkhMMwZr2Kh4MhPL",
  "key20": "33fDHKMdPa3SHuyn1V9S6cyJzLJLsdkB5es2vU4YAPDkR6etWW1gn9hTTCmbP8v45a8aRqLCxZn2RkXfQDoGn9o1",
  "key21": "kdCWNoFmo7uxZrHHHNYy4o2knGA3g18mH2kL8y27cqFL9NQdHFQXFnaN7zsTm3mip8gusjCfixjpQb8m9T14i6p",
  "key22": "3eaerEnxW4VJmxw3zxijbAq1wHh7gCSGgLa1Pns3PVxP6vuwi7KXnfNZfjrWiki88Jh5E6nKmTiMJXZXxsNJFr2x",
  "key23": "sjCN6WmNFHdrD2fwF69itQpkECk1DRKwUJ6AUT4GkmMZQS4df788kAz2mKikadBSYei14cgbqCL31hJHDLNopxG",
  "key24": "X9DkRt88N7UGmHbNZ4HZt4r5nQCX7uFpV6L9kZ7tZAG2G3n3ZX7PNPyKUVghgex9dLTrfijVf7qfNecbwZ9DGyB",
  "key25": "2jt3bKYyzRdf1ytSHrSFn5jqE9CgMEYUkc4tTqz5V5ws4cqwMuwQimGd6wQmcpdER9En99GpmpymP9J3SEYbQF3A",
  "key26": "7X92zVWavgomLRjbRtAHTtQCnMQ6KfDSb9rMCzKTp2PLxZVhjKDKCEvwCvREX7wkE1f8LhU7C6YbKFWsrP9JshR",
  "key27": "4HwZhb548UczbyPcAewwawedbKC4iLUb6zvC99eEWtEKtNwig6e2nnoThspjXqH53acwYSuWbKm6fyDwKk6jb1Hs",
  "key28": "2sYfxUDes5mA92qmBsqu7fsDH3Qgt8TJ64djifoypD4VXZE5j5Ads5ASdbsURKBkR2mmSGzTcmBSwAxLU13XpUBy",
  "key29": "55xAVzdMPbqUqFEH9jqiirtf6xqbaKUZudgsw7BG81S53oQUVM6WhBTcCTNZkJfsaRZe7ui39cAinBvkQnwQKv6Z",
  "key30": "2otyaCihqxSKkcaBncPWWW621zuQ2P6cJ8Rb5ybvuKuiJbAHvuy5cmnt35mg2A1R1iif1xLnfvvnXBWm6hbEgxKm",
  "key31": "49YvVr7rbvs3cMMsnBj27m6m8fT5W2UR2GUcNfDhDxhSp9RLPBd36z1GB7u4ahdkrU9ibuZGXAk6huJnimmmQqyK"
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
