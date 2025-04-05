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
    "5y4emSYRNWA6QtZ2iycC49uZ7AZRJdzN7JErxVD8kTsXWdVY8pPavX9REwpWfdGdTJ1gnhqqTDb9FETtnJmLHUgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "461nKkgxvCEDrKxtbg41r24CP554LgEuhxAiTKYTwN9bvKocMz4onXMFaGuSfBisc3E1Tc8GaGk1v2PccGBtCTJb",
  "key1": "2dAQHXDzZeMuzQU3Z1yAEGTSR9xVerdZUYd4uxUGJuib7QBwSA92fvrNRJeLaKzzNiAv9P9hsZQXCBRhPB3GprKR",
  "key2": "4L6KPgT37vqzMK8N1r2HGfAMHZ8qu331a2fstGriK4okhwU9XbRG1ZiQ3tCiYtk2NhgoEXpaTtuVcSYa3ipW6hAv",
  "key3": "ajWHR6NVmieRiYt6efN1sftEDbKHxujwitHHEfQaG6hGgJbKB4jZ5zw7Pkw1Jv9FygDYrUcEKfXBrUokVf7LjTH",
  "key4": "UAXNYtbEuP56Uszh1oMLnLZhgCzVmWWZZQP1ennEzmqUvKnDZPDcJJYyJgjp5bsyqnBtnthp7cfY49MigcU2WA2",
  "key5": "45THguxxyCjjoiF7KcZGwM6nT1WXttievTLsZrcdhhaoSpqzvuaZbSveJXGDoPsnirAVQuvrZTnAKhzoo6aGRjQn",
  "key6": "3o3ixLVuPUMcQyBdWozdACRRMosrv8rakQum5YtsgJGywz52FVEeU7qgShMqc2rSyYVVT6zqEdKnYQT2u6oKWo71",
  "key7": "3AQrAEnY561ZDQbtHk1SuNo1HDAminXq7iZTaWtUTPHZHpKLx4opU7utKsU6zDSvWDWsEjg9jpXpBxA68HiLPLCQ",
  "key8": "3kSbapUzGaLvujQnjaxKyyPLeEkpDSydTE2mToiDY6vD8DnaXgmZyvkLGQGWTpKVPmPDUJJBDazmotqUNyKXyubs",
  "key9": "5NngYh9kfPGZAUapDv3jEqvP1vf4LPVqisrvLmHZgcfEwsR614c2j3YFd3aLv8ugagVnJuiJqg5hazmDpQXhTtSv",
  "key10": "21Msf8Jv5CL2tcKtUfvCF7J4zhehS5Cc5HL37HnuU4svt9Ax4kQZsoSQRwUypsQHdqP9jCAVzqVjDgsa7FFbpEz1",
  "key11": "5QGmB2VQGGqTV9H7We8Qi4xNCnBNKmVFtFXRDMMtWchWYi5jaWKcWzjVwy4n7YyZBYFS6v1yvDZzH6tssgujRp1i",
  "key12": "2gNvYt4deBerzMuyC1FGxhYHmPgfEujMgaYhnFLhPKETcTnNx6FW3AcECKsJJnL7bMhpjQheb2d6RuENLPtMXXU9",
  "key13": "64RZJhYFyE7aUpnesGLrmpqMXNgWUY8khbtqaQgL7b5NQ2YWMwzNcBpYmFghX2sgwgq6WMnbtNys2fKAqXwN56au",
  "key14": "4b2pYq2KoDPu81pxfFP7V7s28ywSU6JsN8qkqUVdndbDP2YXuERqrHoz2NTThxLwNKqX6eDr8Ypeki2p6YYj81jj",
  "key15": "3UNpu1KYemoVAwX4YAWfbLFZVUhBYpY2apPcmci5q6LrmUdZEeb8kxHYte3EqhJm5SN1cHjdpCaaZs1aJp5vGbAY",
  "key16": "5YfsDss9e1HWyDxzp2ChT94jKA5S1Ju5um3DYAZMBCyfsH5zWxCHtiiMmxo8rd3sLQHiNSqPSME7enMh4czuLyQf",
  "key17": "4uQeGrBNQbpHyocACTEQnWnfGFnSn3gRVjVhge5heR2c89Rdn3pnhgBpgJfW3g6Mcm67dhzhjrFVq4Zw1RmXTar5",
  "key18": "5wYDFbsQCDcd7tu8h6N18Ds8GQPjStYVTbUEpNNQFwRvhr1bRn8WW8g7oo5ZXgoMMdnf7P5ssZh7yVV4PQ6cC1Ev",
  "key19": "2NoKmXXTtUkCZHga4FD2GzhUuPxQTbR5Dd4QAau3AbK1TrWytswShPgTqNcGT5gxSQHUK24ESr1NTaoGXJhbJWBp",
  "key20": "34VWG2x2ubytV61sgE55GtVixWbwWq3zogLbRig8BSRiBx5b822dMR777JPyzRrVMi7cdK8RoupQ5hhSMedpuzFf",
  "key21": "53wxLY7MTwJ8SroUjuEnxLSz8e7CJyotvT3S5YHMygaqCUNpUp7taLxSiot3RHCaP5L7C14ijrcynSZFuySZ7e8b",
  "key22": "35gs1YctchGgejZmXLMWYzHz2Gs6giDo9GS8qJfw7WsQGduoJW4DUpnPjxsVAeDT5gxc7gZdH213pU5SeCK8qmcn",
  "key23": "62XmHjno6CEgdfuFkWi2Cw9C6BqQpEtU4ER7pjaNvXnmRZQtzMSBbtLWaRxpbDD79RGS9UEhiNV74puM7Xg2FQ4K",
  "key24": "2bTvtqrow3dvXw2fAq6ynHzEABDKZiCeCYnoAaJ52VBPqnjBZr5h6abNvHeCzuwN4CNRmEyHb867qpEsvTf7h3GG",
  "key25": "3n8kaPC34S2JrcjE7UxBstBiLHi4q5zdKYpEGsGNagW1HHqmL39Jy4kheV3SucyUaggnsRbJjCrjNAELoW3etBc1",
  "key26": "5xPinQer9vXq7sv2snvPURoksDo4cZjQbA8hP1xZEZHGuMiT43117Ad3bZNAHQZ1zmcb77xjP3mgrk36BZok5AwN",
  "key27": "4n2YNyQwZR1R4Tgms4qGJtLXChU22TCTPgsvuj1txN84msfuCJKWKyRCdmkyRHGe6J2F9kSHazaF5RgiGJKrikwB",
  "key28": "45A13T4i3T2Wp9ibufBbMtmaa3TLE3wyeJkQMMg2ECsg5Mb2bXLXTFk4MMBiDyZh2R9C96rc8VKiqHmQgQ9SEzXa",
  "key29": "Ezymag8a7bxgdVPzfpXt61LUnyyHH3F1K9N9irYK8ToPESVt53TWdpZVKxxJx7NVb8ZuyAy5qjEfB9f15hGuYua",
  "key30": "2kuSLxSDycCzcvW4BkdnJe1waeytzsgNorXYzocf2UoALVmkPWyGLricjbjW7VtXQSo4vnyiPcTmsRXmk2j9mHqb"
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
