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
    "DifVFpT9jxYNMHgd5MGYRva21SbZ3YKWiGt9AnufdC4RobxhRxKyWvsaPcuTMh9iPB8CNNDvmsg74VJqWAr9GPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ujsQ5Vgox2SX36SUnZQJyGRuHnyzdA8Xvnp3FCYzxWS5uNWG46P653k9c7S9apQUkckm9BiNkeH7HVmorLqiWtX",
  "key1": "2fqbewt4PuERN7KootnfnpmHxArTYYd1Kqhwhv4qZ9hd1G8RLPCSP6azzJFk9bwDMjk6hAKzGimShEj6thDJjq1p",
  "key2": "41Jqth3Jwioq4cZDZk5KD4wRnkrX21SGe5sUHjbAXLsAnoF8mPPMSi2Z3QwJu8hMsUhyHDvYS33bsqg7GTExdUmY",
  "key3": "i4g2Yurva5pAozoP7GBktWT5WYSdP77xz2KfBKDTtLag4RqvWkC3xf972JZcPBvrM4XLbP4ZQfABoMze2hsa49C",
  "key4": "4zVnhgmpgWcEX61u8S9HAfcVGxVqd7SuvCT5yQXGvyzeBUiSoxQYzd7uSqJQx3z4sucCrN53DoV2Lmqj9SXupvDX",
  "key5": "CqXovxhEj8Wqb95SVsnnQzuHWTgr3F9qe62XSqtCMF2cPBeHNdckGDvCnaJrRWwpr6xqrbiBbZ7BhQ9pqp8GcRV",
  "key6": "3SCMBVPWxPacSLLFEpHNJtVNFrbd7uvZFrek32RsXDbdg2F6SkuEftb2d9mTajXkHdeD6xiTvA9WTb8N7g89nJuq",
  "key7": "3HjdWLnQRDuuYBiuBxaSHwYKYP58WMDQDDKt2Z7LtxNtXXQe1uf7hu2QKWyChkCrVnmZxgnUpvwx6v3eWHXCNBdj",
  "key8": "3YBJ6vF5Q4ry3jTPEFLoTdxxMs9iAsGB4p7zZNRDhTEUqyNTXG8aYBKkuAjZK5GzfvFy4xhsgZFmARYA1QRs8KNs",
  "key9": "3v1y3kHK6SD6N5wNKbc2wzXv579dhqDZ58XNejzDHySZXznJWeER6rYAjsCT9Q6Mge7qDRpekd4YnCBriptFPAdo",
  "key10": "4mA6nLVax7GedfSNbHtLEmsSQomRKLhyT4jAGLfdVcgQtJVAKKh8n1n36ezrJLMGdQe6LPkrj6dBUp8g9ptVMPkt",
  "key11": "66JtZ5sYVhYXPqjLWXLqnCiRDqXPAjx6thQ1rEN5ibaFrokRUEobf2BYNoz6QtHG3De6nTYohmrRSGdK2xznWoMe",
  "key12": "2BKhGbPfs4knDCQF3n18axhzRHzZqvnypSw3dHds7MJF6U2nia6hJ2PxrHdFKxBMTcKUGteWuptqCQ3uNvJ2icAv",
  "key13": "3jqZkNnMLvjZzadbKE3WVSy99pcXoZBFTA8MgtxkZAhPvtzJ9zLjV5ZcxiXb3kbjQ5peraEvQGMSeAWU1487Xtr2",
  "key14": "45b5HfvKRQDS8unPe2USa8BU7LKPECrtwVW8GqVPC16wBzGUnfAZ5Mogzwt4frjBZfDxWa6iWgUEo4219tumboi2",
  "key15": "2G5atcT8bTYbqLmsj2sDQMzKoXmrnz9XKxNueakoWCz739DvnyWD3YWAoJg2bVvsfKMJkXTvixZwnMnTekPVKzcd",
  "key16": "2arN1viSyn4Ktxdrkm239MFfZF4fRuoAuk4YUpMTpFb9DszaVSfFhBCH7ejasiGiXotjdKepn1iPpMSC9Kn6ijVp",
  "key17": "452RCKwWoLfgnoyzWD8xdBDGykrjKpBttvhyXB3GD7bk8fc7nFn3f8hq5okUCvSJSjcfizC9knFmYfSNTcw98rA7",
  "key18": "2NH8dPPd864EojozPFsywZZ3BnjD3G44qohjzTuSPXnveg9LRoFEoBs54pUTnoiwion9RJXpYy8URTRcH2vvgChC",
  "key19": "3wKu3scBXVdSyqac3fSmoVHQ1eNLUZCHW4Kjni2EKEbN6rYGhkavwgqk4PkEv38bMvfsBANK9XKnCdu2QQnrUDMz",
  "key20": "5xuSUHztnR93SR2oqQSFhhi5n3iCahBjBLWCgBqVB9xfbbekeve6FBcAYVCpzGYgg3PMUccwdnnG77iQLK7DwUzS",
  "key21": "iFzZZQtXoPDjRgqK1F46rVVKqPhtMk58CPgpDvcXKenzvykmQriMDCNfpAkruUSyTTL3n5TvjHYpohM59DcFu8R",
  "key22": "3LcNVpH7GVkonhRFhWGVZZEdsCFk6CNtSug7FfTzyGjSC1Vsc4ssc69hQB6Sp3yRt4oY3Ck59XSxTrKCKym7Dn6u",
  "key23": "5i7Ym6wXntR3oz46mNt7GXqqKZAJomXJYGu2SRx3W6nnuJTitCRpFggHu2gkUxtyS36zyshx7zfqQAVHpokx28pf",
  "key24": "2T5iS2jKAvKgjoPu5RBDB2QJ4WPHuj7GwW1ruN4wjqf7xS2MFWX2eD9mGtiS4GRPpU1cM7JWJytzBHfFxFNWiSq4",
  "key25": "4jjWkiDwmLzVfTyg8PnqdZaBegGuZG8b8ZqWDjz2ANGitW4Fg4Xk5BNNqnqUHDcy14jG7JHhiAZHXRhgWugU5q5H",
  "key26": "dwdtmMKohUhQdbNc3EdDTgj7dcZ3JhwB6Cu47pJ4EWLP2fDa56H7komenGJdZD6uEs4eRHw6wkLGCWcDtwmfNUe",
  "key27": "4XXVvcAwESnW614NWXEFrFhnVLX4dUMNjt1qtYckYiUN8ggrg1LXzSc8KKAZsgGqs1Ba1NqArfGEvCpXqwSigcWN",
  "key28": "wQAoa134rGELbokDCN4b4Cv85RLy1PRhfWcHieRAswJEA6rqeoi1KiYByccQiiryz2TwwGxJixFMVPisexEtRZo",
  "key29": "2vxWZkxYPL4EyW9PA24oJG9YKR9ejoK8oeNAVX7GgmrZEGWYmLHKXVeDs2KfeLY3rJgVTMtzEbyF2qkmsh2YAsfj",
  "key30": "JjXvdaF4JrPfLN4Sgf5wBCWEuSbrfDFE2EqhNACW5tUuBhRsUvk7qH6tDGKjgeEN8JWq9rKinW4WqAcHWifCAgY",
  "key31": "2ntfvfFBKtgucn5NUTt3dC4TLNBbHBs4DaquFi8fdTNBRwkJi3fUcLfzUCv4bV7YFmBg4JBb8bx8jLoEy5PmHkHB",
  "key32": "c6UakTqet36fhQaA19BJXYFkB4wPpiSXKjCgtZ6uNA5LvBk5YJrHnz7mXfpVM2kdF2KBrXbcokZS96LbwE6XJRj",
  "key33": "3QocSSkbMCe8CnFsoVeVGeqLfdUnn8pMEoHXv1WDePFqBivaVMTz9uMbWqarx23Z392PRHUXuSLdDuTLxR4LtdsT",
  "key34": "487ifyXi75MzygfJkjbpJyzZ227c1FptdWMBiCNgQ5WkRfbH159ynr1uYue2BkYNenGvf3Eyn2G6ZJrmfX58R3fL",
  "key35": "6Y11ZkBLAnus4iXhXGSLhfgJeNYg6NPJxCE4j64NR92nottzo9JR5LKmSu1r1DvDsuEjDHQePZVW3Lv55d7x8JN",
  "key36": "4aLktyiEG9sYDu3cvBgCgQPKhMkqFpzMsLgzUw8n88Bh1XJ2wtto4pGB1RaeVtMhyaoAjsCgbZMQoPLAE1d6KfA6"
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
