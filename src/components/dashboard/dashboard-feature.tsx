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
    "64XR8WZJLvCuisLqnquyrBGtTEfZPxweaFgTHwJyBRdpwyvwrPHEEQEkRBXaq4hyzh9fiAo3C3AZeMB7u1jqK2RL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KMTtT3Yt16paRBbTdZHhKcuEx616swwQZ5VeniLJCexkcxvsdKnHJGg5wYaHaxM1ZXbBh838vE1MCi7DRhApwvh",
  "key1": "3fe9FfzzCS6WHLjbsvsiCmkhH9usJYf19pnu2TNTxEsRaFF2oMrKQa3XEC8zpUmJWs3S3bhckfxd9muQc68JK3va",
  "key2": "3kzNHNhHgZRi11Bqjw5CGzuyVJCKrPP3FhnRjNJzxSx2oni7TDgtW6qZahX5qFpkcDZaivNC4fM2kV6zNDBnZFjj",
  "key3": "2u47BesxF2cLRvJumdFP141zhDSPtshV6AvAva5yq5rHAhi4WWmo5D7NQ7hnrBJ2UgFy6kraT7zQzHUCJbqLUaAr",
  "key4": "4JrXDDCnayYHZGXTcipyc8A22J1WtNYPaJdkUGUFtdAo9tufquteTbmV9cQMGP8ULWSGaj7g3hrZQo3o3exSGY4C",
  "key5": "W5ngBW4yvj7WSSUYosmtZAt1TCgnG4dJH1ipkxz2Q9i6h4QZaxPeibwfd8Nm5kXeWEJ6Pz8vtdivETjFKTyTL5X",
  "key6": "Xyoxjr5VmMbR1cN6FwZKzEPis5CxSqnJAJR6JR4F56Mr5J7sK5ECF9HrdVG6dNB5So3nKszpgMDtmk5prqBFGk3",
  "key7": "eiWm756yDB8mPRTSvYPcHhDiMC3SpJcZVZFAH49koqfXj7xmpdUbXGrmGmbvj76qxwpp4MpEaVJ6R6jbERDUPCe",
  "key8": "4Y5r31hcKm7UT21E8oufkySoirYyaMSyJ8VqT5SyVVS2EWevnVwLoMpRUywizcqRMn9p5j8y5YKwBXVo3NByAcx5",
  "key9": "JgGmKM7R5YjVTWdYPwbMCXGWaCMPgqKrAKEg2ygU2CadYVaeuCgqaEQuCjbZnBgypi5xcBCtNJJ9dR6XQeYgVY4",
  "key10": "31i1JhDPmdQgr6hhNMHSPr5geMF7YzcuvmHdRGFUf5prMESz4Q7rvoro3QJ62kvV6sG9TSUXXCt46W1h42jNn31L",
  "key11": "9wbqDqZ3W4g7LVoYoc7gbQ8E9wnCWWYPdNQsqtGiAhptVhxuAvXkGzbxdwg55zboobLdjqFMURWt6SrzR453KN6",
  "key12": "22kjyGNhdaoKLjwjKCvBJhcAP4KoEi5mHAcPtmu7FfqVcTdGwruLwBr9xN7oqDWUTxYwhG6KkHbtBvtd5KcaxH9o",
  "key13": "3PqroDt4YhRSQwuHvYboguwZP5MWLbbEypPciwBrrhprZaFV1MnvBaZT599RnAhYjMvWPdm7xudtAhdoh3peLFQY",
  "key14": "26xUBVWRffh7WGzejFe6vRu7cr72cqz51t2mdFHBhk8g9moP8H78cUCCMeFtgJJVuxKYahd56jZ5Nyfzq8uJirn8",
  "key15": "5ejLn4M7Dzbb7VV2ZSdY3vbnHQWYHRRZUuRexB9yq1Lq3Y9PcV6euHbYnEPqi2FKQgRvQSfMuZi4V8U5hMmmVUXp",
  "key16": "5GMcqJtfBn8h3nULaBDSpu7wFAxXDeRu2BgmYNbsog9NHrLQTkHDcSJfEs4mUs7VwnyUwBKGWLf9JvfGwQgekj23",
  "key17": "4pdqHRfCnvd86VhhVjss92Lraoo8mACe7RuAze99zvntd4iXNmwTBrzXEYV3qVgBmq6JpLC26dni9xBD32wDkRrZ",
  "key18": "2ktnMAykwfeTjZESaXhkG2qLL8LBhnzae8JZeQezy2znVqPXzV5jGwCQzrTS3DQ7bt3Mbt4SxYAgGTn5gZdg85Yr",
  "key19": "3P5xLj3WbgDKBtvQ4EtstKF13JG82PA9Jf2cQegeUFQhc6czJ3mSqTqJebHz9jU4PPy9nvbx9yLf2bK8sM9yd2zU",
  "key20": "foFjHV5EUzmCkbCdSQ8kvmFPvuQnWohbR5sFdY2Zt6uoSzjFaj8YZaE3D4MPP7heLWfgzE4qQ1qQZczwuKqZDyp",
  "key21": "3Ro7uAUn4P5SrgLNRYrSKBtBKdZi79ogDtjCTjGSX2iiABCohKztAykZ5zHmb14F4e5Emomm3UPgW7akgz1Fuvi7",
  "key22": "2ayWxp5RQviWNJaowq4zVhdKF7JcgDvKwk3vYypzJ8FVee8PHnazUKG1gQEgAXHhnYdkbkao6EwtmWFJ4NHRyF8q",
  "key23": "LswCzTzJnBE7dCKdRHswiAwuKq9vsXB6d47G6P9QMuH2RZx3XMh7YjSg6Z4f2184NNQ5EVvGzjMVb1irCBagRKh",
  "key24": "2jNQ2VurZUunFHBi5P2e9ihZdRrMBMcmsTpMB71J9NeNpSQVULvwQuQid5XtZtXrmGscj64aPdnvsgJe4rs6XS8E",
  "key25": "4yBJ6mk7PXUZT1DhvCusp5dnvmpD8XL5QHhrBwrNjf7LMZAHo6gh2o6tYZ2tLY66ASiYTVtVvToTLkKhJX4TSuCY",
  "key26": "54fkB2qWBtydM94eZQ1SiPvoAduvLTcUu4gn8BwkKB8zCM3VJjxzFyHEQwW479fVMmDiAZSrdYTPGsqoQMcE1Qds",
  "key27": "4Rv7xbYd4MEeedKdHjeS9EWUedyVRAuvmy5B5VjNNBC3aPAakrUUkCLLygfwHSKXAYpLxrQ3z5sCTjUPWCx1Xc2R"
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
