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
    "v861C2rxzXpzQEjquJMyGtV2A6XZx1voZTxuse3oE6t4RM9cFWjhhpRrKiZyNMCTmKzMehsFLUyqQsCuUzRxCAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bjXjCWzD65XTrnRwR9j1SBniB7xKFx3CwgSFQxarrz2ju7mnjxCvyXSEoCm48niJBfAk1grketBgu4SVwJ61Lec",
  "key1": "3ogXeBAJPbJzRke3x1HQZPvkC1BpHrDZpraCVN7YvWfB4EQUoFW1dJ2r6sSMf9cVa4HkPyvYCHpyMbx9zBreXh6E",
  "key2": "3PVXWnPX5PjDv6iEDiCpqTaPi8gn6nwazzQ67QgTEJQSybdKDUs9NP4BH6kZpuGDkmqYp4sEVZAXHfYX941wqq5P",
  "key3": "3iU1wWYpKZykxf2zjRiwRMAMRG6pyoiqKnymyRQuzTxdLFzd35baLhTQChhanLHr5dcoxrQ1jq8DENc75zdt4K4D",
  "key4": "2w1ZgDdxopZtQF56LwTjh4T68MRME55D836iGjyFpamok6cHxGHNYZrvrLVziYeoW9yQBx2xCnkVEP9QTxNE1Qfn",
  "key5": "3t8uZXHSdheUs8GT2auxL4BVscow7DjP3dn3J2p2dt7a2SSyaipSqTAwKpYy4BNQyLWuwotg3Vrobxg13Aya1XoK",
  "key6": "4J88yTLuhPX7J9aDCs983Jhdi5maySqYpypMScgc7jdE37padBFRiTSJAYqArcXv8L9FMkn6XnSJqM5gyDj8qkqS",
  "key7": "4H5PByMcm5jys8iBaD89kiDSB8qrDzk77ztFW9gDzHzPZcyrqsFAoPaXFNC3gyrmWdeY7yvgg4iPzARsmB4PNv3v",
  "key8": "RSSvUGrbXvFKUpGhGrVT3BLSGu571FMn4Y8SnW4a1u88cvvVtoixLsK8KnuWjFBiEfG5Sag6JUa3sn9keKPpC3f",
  "key9": "44hrgQcX1U9eiN8hqaK5ZK9q7VYH89z5pjR3VXKDSGisRWR6rjwsxm9WHd6zK6Cs4BphoEZY4V5PZHkUxQa43qND",
  "key10": "2eqsP9R7QiBivYh2BYUnNjJuRLnhHt6b2fsxMAm7N4Y12U1aJTanmTEoo7GXBMp97XC2WHiTo9m2BZCCkdk2pi7J",
  "key11": "5L1mkCNLGPV6FBFzKtj27S1dc2A9D93M8K5qvjXkaS6VXxNiSPgYKUJgZXr2nYSvwDx1JxZhzB9yRhCjQVh92Nks",
  "key12": "3qaDW1tpJxaoFQ32QiSdPANGeE1TjpFj5e31YrynoyywfoJ23yf5nG8H5ycJ7DeXHa1FiQqPP5dPfts3ygxY6ft3",
  "key13": "XMP6vmpgUHSUxS9deFiqGrWspE2L3VdtFHinLS6rm2wwgf5Uy9WByAo8RSpRT7UYypRS4XLukFx687skaa5rCVc",
  "key14": "3NKUmhBWxJBV8WSc6HDWuD7tRP54PxyDvXVT8z3CimgnxWrPhDxq3VPCazp8JHDtsg3PALu9LkLjxGusztYJ8j5w",
  "key15": "3Z4Xirj2jtouJKwd4Ybp7P5YyY9NuTNttGdQZZ7ZEM3Z3A3vpLy4jNEPTuKbs6YZZn95dvfa4TUqLRsxei4FmQ1N",
  "key16": "jowBNR4pJ3ug4D3nn36hMxr5Zw9oNE8XnexfQt5ku6d2swWAdvtQZ6UWWXqSs5DvAE8Uqh3sG7j3ab1Pp7U7s2R",
  "key17": "ULT3nViu7yGaEMZYVBs56URHEajg3RPXyXispTQ6bV5H8PP1yxDF4vqHAnaFo2n8RzQYFqnAfPcGpjyA1Uk8vnZ",
  "key18": "366oTskmhYHyCJMTLZeDbznKPadiBamuRYuFJDoFRiEXW6T1a7NCCPpjUKbYu6ntkiXpWWcYgNQVhVzNoSkp5bA8",
  "key19": "bGafLUJ28fUGChWFtq5Pj1mqB8iyGBsJh9jz5jTM1jzZbtGBfxxVs3mj4Vfe7eG3ZijgXRuJqsE34v22dJ9zJTc",
  "key20": "UwPcDs5Y3pmGazZddfj3fWTm2UNHy2FRcdYQ7EFVuzpxvtX7whYMFpxF7yGVqMmPznmuSFebkEgmNm1JERJoSR3",
  "key21": "4ZRsjujQet4Rq8nd6n1qGZkQVzQkXUDBs9V6nKdNY7yTZdAc3vn3RoLzfcxZhBDMCq6uUSWqbAZwnCEuUshSPULy",
  "key22": "2ocaovuG82QmMeaghPvms5E6gXfiZgZxTJiuLc8MEupbv6uZ7rAXpCheotkB9EygboobgBtyTArNgBka1hxRup7Q",
  "key23": "b6Bm1Djv2TziJtNspE23Vmp588TBi69mfkxkkogVfU56DSNtqLQfJ3Jw6nLWCn1ZpSCiZ7HnzigkrjQzXcBhtA5",
  "key24": "67fNvD8JU5dNMs24PVHRf1VAUZtx8uQ8UsA7Ms7sqhTiX7hwZS91SuKNuEKgEDcmJnFD5GF4muMnrGeT1mGzLsiq"
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
