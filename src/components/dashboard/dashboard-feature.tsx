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
    "tCUPYZsVojcPZ2Q5wNtCaWTfDfdN1iHHzHEUqFBM5wACm7nFCS6C9RM3LSfutqciMpDPgYLJL43JEffo8wG4aGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GEaTwGQGJKRYjUWN9ZxC6eccUUoqaVTL2wsiS8Fzx798dQMAqbwEL8YJJyqCDwYjm1m9L4uHKumQcFhZE72Ne61",
  "key1": "5FDysMtLURzo4ma3XMWqsLn4Q4oGuuhJka9cH6kD8eJd74yRxSF4EzHY5VhWTgGoZkfM2LL2iP88VZWGpQ2RfjXW",
  "key2": "5A5fmWodMqrcLa8WWP7nJbTXPS7YBKWZmHDCLALocUsobyavdceZ1pMvqV8cBNz2Efpjoyxkdz8o4boekUrPm75B",
  "key3": "2QDrA5iLJp5GurcwiauGym3X7194V7fPrpnRCMQnwoP6zRvXHKYMK7isSDGAKAE9giNo12BG1ZRJM8p5KCCs2rv8",
  "key4": "4wN6wh8iq8jdVfK9Mg2YrErKLe3zeHEs1HTYZvkCPRK46ZvfvJNAAVZQW8rCd2PTSowFJAdyVsidHo9QtpxJTynp",
  "key5": "w48WDFy3hdRzCNiuTLboVZRxNWv8dHqSvCgRV5DwQUQ7HYhLxbyv2biq4Mycz3KUw65yLSeXBTeR988TawLUwtw",
  "key6": "284D48MuTUG8Us6C3WQgWB362Vdc64v6UAgn4VNTwqM9tvA17qk8EKK7pT57JtzBJKgd8LJcHGoeMonpfLU9X9yo",
  "key7": "kLBdhwLrmpKhxfBRFmG7AbVMp3qgujXthbHE3PmtE2AiXsatd3W3nYSwT8WUNuNbFk96VrazkVbx7LjurUUitbP",
  "key8": "3EjgZP32CjKtjCs4xyuJBSTTziAnzrSoLK63uUMXNhBLvm39GMeohD8TxaJ41CTUPWGCCmHbNxi661jAm99kNdF",
  "key9": "2DyNLxSGVbrSmSHskxaPS5pk9dDB5c5dCRx7aXVS7HxUWHQBDePgZmUwKFgqFbkt2QzatHANyDLzXNobEqsxUgmn",
  "key10": "CWVrGsLosccJSiiVcx2iW1TUAU6yafnG34Z3X6qejJMEstWVASXM3x7zfDZ4YtjSDkthts8QpPj6QJgnR4Fk2YG",
  "key11": "3663FgaxSgnzzmEjeJKsLuGSpwwVCV39sWZXbT212TV6cUrX5vLrBEPfYTasmwMF4QC1fNDT4gGma1TAaQa8qHNe",
  "key12": "Xd9YzFg4VpmSELpowAZRi5bBmKot9oppCgw8XzzDyXGnDoTA8YaAqB5d8nXhFEevrVycfmBYmcMH7RzfKVYw5Ym",
  "key13": "61XikTjhQC1QnPYBTbn5YHDfXxXTD63PatU1MQQBjhQGMsTvyPcWzmcDF2sQqZzD9LCQ8xiLobmu439CGHbV9LWb",
  "key14": "3HECTYfbXzQ5iaM3BpBfCfkGMkyPxrAvUSNFpAHPJ5pua2EZeUmGWuJ4NzJkPGGokDv33htur6FNXA5CuUSYbbVi",
  "key15": "3dm6vgAPhJZca39wvh3sKBVqpbnxQAYkpPrWAhTSPkB3AoKbSuimXJdVvoZ7Kpo8paLRPZiTmfqV3mFyyqNr6dig",
  "key16": "Raf2t2KYCjjTAtmxQTtPqKaZtsCYKhgu3Z3osCaYNaQCYYVzwN84heBisgwhJbDPdf55SWpFhXNmB8aZqGcjhte",
  "key17": "52GwSPzDEwp3DdaXwpjFNMoVaJ2Y1xHi38DU8miNShVaaMWDRSPqQAieZb7WkpfExxddVY1uWB8NB68dr9G8LzjL",
  "key18": "2CpBChcUkjguQmaPje94vkxRDnNcSvwYZesu9VxMCoWnex4vD9Rk6PhAJsVgQevqUPJc1ZaWCj25n4iEyWXJmENH",
  "key19": "38WWLxx2jsitAVJnbvzWP5hA8u6aSJVSgwFrAig1BHt4vHe6m7UVzwddhMMVoFiKpDDEQiec3aYbC3SApjmUr38y",
  "key20": "2fkSdLvTMz4qa7doyGAmVjwkVehebv1WZ8EFcdKfdKZrw42souErAgpqpuEMewkPYpzCDJ1ezDoJA2fTzsUdPZRf",
  "key21": "4xTL6A1mUpqQLuFkpwwrJRdmzmsWu3U2pJLfqUmznLafMEFaEWenWvzv5Wv8hdYPRdCG4f4h5zcQBsw6zvNoekpm",
  "key22": "bkkyAUXnVVEWy1tZRZqYLx2zRavWPcwvPFBCxrneJobpLeoF5WPqdrHup58c8HyfDkf3M76Kfiw8ZfpnuTUGvC6",
  "key23": "ZTNy3pHt58bQKwzdeMSa17i9YBXFy4VqMWoyG2kLLkdVjoXqWQ81wedPav7yvBvyiQkb1UqPvzyFzUgxqqu2qCb",
  "key24": "jLQx5V4PFizwS5rcUYzFnL2pLqjGfkZ25Muwz72U81KqQ9nJWL1ZF94GSgLoMLvFoRTZpcovw8YAA1bcdvN285s",
  "key25": "5aYFjD7nGjErcsMoz3g7gaJhwkXrhmg4Tmacfz2Lusjryhekmsi4mrRHoikd6DinZQsEWqzjzgUWW4PUnVHzfh7c",
  "key26": "4rhMA322xsJCQotrFKmTnWRuf27JMz3adew4MhUP3rtAHwFzTxbujmtUd8AYQhkSenqwtS8NYnnSbydyzpE249LZ",
  "key27": "43M9ySzLExPMkmKKUBsmXCA6N9oYm7hP4WfWVw9sTmfxjVxJB7x1eUujcHLyS3Tzu8KfFSJrvp82sD7RAT1FTp3C",
  "key28": "R6qy4HcErjzyf7LBgUepMDgkNqgNV1nUEA9uNbiSaRdvnMrNRYFbZ9UCskoXQ8MGLQUR3fzKDy923o5CqnrsviX",
  "key29": "2k9FjzVSdZ5QtfQdaVSSzfvVSPMPjwGF9aXZneDNLaWs9SpjTxbj28LpWfEuGCAwD9BFwsYe6F6uz8AvDLJfEHW7"
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
