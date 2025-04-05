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
    "3rpnjXEVdnWbTyjd43C72iCPr1ioNtRkzfc1dxDLoGicvJCcJmEGWwp65HFhQ3wmSLVBikKgDTq1VsFwjNfRNutV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CZkKbJ6X1Xsq2BaCS6qs3Ha5C9pQMeKPhirCMBxaDNmy9JiyeTwBMddQqRewRp4NzJcvbLEBqeU2UwKWzPX7V6",
  "key1": "3x4J33iRaz8MfVbYGX8WrrsDEgjRiereh5NbTU31iqkTbwLJCje6UpBPWgFyzFcsU9pgC3sdKo7R6UPmYKFxrAjM",
  "key2": "3d9wtaDdnkWtrkdhHHwcNUZSkf1P7wfGrg1aTsJKWEdUHLsGZDw52CebbXjWNokvvvJwbs3PEVcXPsb4shhK5YRw",
  "key3": "5AwfrVd3FroDGoSCUPsAaQBvF8E2CLz9juxcZmVYbjbMqxrLNMz1Qu7jP97YFQHWm1P2fvXZmzsXXw7zZFNry3yn",
  "key4": "35edyWSQkrUrhkm9zUYm2GBNqY4JaMTH6pMWL5CuSBnBmzQ4ZKWYkKswXRdcjsEDyEc9FjqayWTUEibzjYDfQUZe",
  "key5": "33eGL3DQobRmL7Kw3H5iuEztPr9R8vt3NTFghNyW2Q9L7wgnpGen6RUhCVNWoqPjnZc5fjbCf226jyXB1dEa9LHc",
  "key6": "4pckbkgTWRdo6bJm9XUgkhcVgxDipTVRBDgL3KwpEYYp4xJWnueHLA9sb7QD26vtgLgJeH3gGdEPbLNyXzofZyk6",
  "key7": "3omnzSWtPy7W8qJ1bgbsJYemQosAFhDbQeR2MaYFKci1ftvCUDZ9YVEGEpirAM3cDXKzv4osjPRZZem5i2mKSyKD",
  "key8": "39DHUWmic2saHQW8rxbHQ3y5Wazhm18Tj9vQArqmB71QBDjEsXwVjicTwgD9GSxBqYyAWhqKFt1xkKouCoxyqfVt",
  "key9": "2AsFdDzAoD6SYFWNoAD7kRoqZ1G6g1trwNHAAx4bC1g5hpdxNXDgMWBRqyTwAiwEYTRMrAhTGL3szbzYRwoAMMFK",
  "key10": "3ATBEA84JqNqbUBvQQnmnSsk2YkgENp2rWtyzRN11wFkM1vUgL5A8ogvgUv7TTGKdzfuoTF4344edpzP6cKNtLya",
  "key11": "uRVQQnnxU65aqAYg2j8EihDUgyUtShbfK6nRi7KXY8TXezjcYjrRW8YyX5y7EV6MQPBSmUuDzruhYfAB778J258",
  "key12": "33dMjnfzenwm8TXf8M6oCLnqBeoweUp4pBhR1phpc2jw6w8kUJLtD1tYKzbukLhAtra7Nx6riJcn2bUAWTaogJYE",
  "key13": "64EmUnG2MTVfL98N1uY3Fa4GbGgUtJWp7DHMoDNutTZ5wBhqo6Df1e3BN8jgh5FCUCLFDjVZDRysbDPUcSv8Ww11",
  "key14": "ii8TJqGEdYcwsMaqhmf7RB5GbRPanYbvAcYT5qdJ9WwQ9dXpxFkfsSSRMDv5EjW7pGhAi688H5wnBhyx74FV7Hd",
  "key15": "RpGHDrCNJQ3WMCeNsjYMoTF5teVWqberbaQZvkowZUKiaZQpeHRzSTR1UF5ErgaY9etFN7DymehkyMYMTFFeDaV",
  "key16": "h97R93wWzmPXvdZKQ2QjyDQ5Ah3dXYR55syp8uSHct7Q74drXmg3JH36EZjtBaKKKxMSBUEcjkuPNWtrAaaQahq",
  "key17": "5PTfnXCU1hgHbvTJeT88ftmbRYv8WhK4qAFKDPYwvVPV61zTk4PVaXf92xeSJR16zVaKQm2hCwLCcXZFucABS4Ng",
  "key18": "5bNR7KAnCe1ybNX4nUcxBZJUq5q7SSiY7nrCAsZLqAUoMTAJ86mJWUpJt7JDnhQMQyfyhMynuVHVyG7hPEk9Ykb7",
  "key19": "3YRgaWn8CxUMCUgBVnq1g8WcnUp4dbKdp3grY6DjM9ucMSpN4GfJrwJz3sMHt4FEza8HjT8in6UsJp2TbpBjMTho",
  "key20": "2QhvWy4htpPqkoCMoe2g1dBE1cqH33kYSnpnTaeAS8mc2rx97LoWSzeVqA427MbP2aKJhvqkrdpVCFtU5ce6HHmd",
  "key21": "5Yn59srGPgYWXgLavmx71F2Toxhh9KbhqMS3wjnfNtGdbF6b6nKNHtimgq87ALEaNwY84UWJ4hxriX9ot8vY5bhx",
  "key22": "4ZxNqcTaenchn3aaTwG7s5kL2mXhKbLdvS4fFikPEdHzmcFD5LcSia1u1gEdcHveSsJUZ49DxjqmX5ifRQpqg6g3",
  "key23": "5g2gevdqvZAJgK4KA7pRNjbdGhTebgLxt2dyLH7uGJ3TXmapUEpKrPWVUhVexmsNxxys2ERCbXSZKfJwKZkto42M",
  "key24": "5SjaYEcjoaGXebfNV16aKzmugn8uXefiT8gfSQxvwBqZLwA2m7HKC7h5jsoFCXTD2ikXxqxqrWtUTe8KVYxtN4LS",
  "key25": "4S6m3csiA2gCPq7XCGyNvwAVwLkojSvV9SzpFyro542vyRKL1owMEEpqg3eH6RjcNzYBf6QGL6Y2AmLjmepCTEZm",
  "key26": "3ZjNerBdWCnaq19SgWRwJjWAzN7oe2gDFWRnmoB5UwAfLyLvAu482EVLusoCrrH4jLPTjuyGnW7BRNFbK5eMRYiF",
  "key27": "3gDXzAPFLJg9MLNVe9FwqaBB3bn64PShw2dvkrTLDhqN7Er2fkmJEBHkVZbcqvXTME3WW6PFZwCk32oQhsiXqDBh",
  "key28": "Q9Q1usM98Anx3fuFE57pkrKjQNMmTauP3sLE4NbtWqpVooSFTo9ene2cnPg1Qp1eL4MkLFpmahHo51Hh9EqbLLT",
  "key29": "5jCcTJBSzDEPjLUV1HzSHv9DXoFp6Vd1UYgve1L9Wt7BdNJkyZi736wW6pCN7pJ1qkw6B5nLYY1rDx6btHRuAVFo",
  "key30": "3cPrunPZ3phvwBXwqy3WcaZKPZDMct28MHv1F7RpnyjWWinaZWX63P6pkhDzcbZVzAWkEitCdpnVUsV88vXA2UJQ"
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
