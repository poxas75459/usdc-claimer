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
    "5eVwVu21k5mZRXLEDj75tauFCy3CSRmGnag1NaY5LPTefg9XnkwDQMemV1Q9dVdsMBpDMoUqfpbzxWZwPtk5GAH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kqAA5yXvShGxhbACeQnprRSY2nLYG89aF3HoTB9VTwvFGUSRoU3r9feo3BE9ebAVVSyp2Rh2fgKpcWGrUG2NZ3p",
  "key1": "FdmUqJeWJXd9o4XRUUTwJuD2rxM3Vx4Nw2rHgYBZCeCihgXPEUeBpzR2dPyS5Q9SQzWjERdideWzdBdw68o5Q4N",
  "key2": "2KhQprh4kgn5mHcRzqPJbmmH5qbrHK8Kaeay4LAmtYcADU6fSHbfoT9D1kxL85RaJU2p2wNwD1To4oteA3gwconc",
  "key3": "rUnzm2woQZxjzTvMj5jahN6XKD4fQhpcyUaRX7rbiW2eMUbgWphQuP6DeY9YdB4nVhxTwL9rNiyazq39Zuna4rY",
  "key4": "4Usg3FFxN8kcdELi1Up6gbECNuqdHtFZwAqEyBjtpLvrRPdRRXqESe3oqtrxqLd9yT4cZgseqoeuwpBrMrTpphyp",
  "key5": "5wzz25JEmCoMXpTa3u1P3KHukBvstWdFv4isJ87tgD3JFN4BZBVJdU7XPHKN8NDqNkW173xdieZtYht4tbz8Zn8s",
  "key6": "42FmdcgGDE3yrD9neffcfB5L2MqAsT4XZcP9uxemC422UurH1ucH7ZWTsvCCPCFXQzd1N8HS24UFGwGZ8eVa2pJr",
  "key7": "42qgr7ygE5HVTcoYZk2d5hGXUreUvDuznJvXvqdWKaFEMvzxHTAQrssD2j5JFibyGZqchuV8UiqM9GtAmBix18qB",
  "key8": "2x2NBrdtrnMvw2TnSWp46r2UpcWX8N4yXEWRHoYGXYMnBZjbdbRaCDnRbKbNMU13bDVH3Uv1ZTDknMRfWiz5HB4r",
  "key9": "3ByKU6fXUTrXSPbY7tw7Ru361MHQZmij3DQbPPbvvvtX7tEMCwRr9PwH6Yv2F8tRpzNWKLBZigPdNE2HWQTCo1GS",
  "key10": "8U9x9At1VgAXdXFzrrFKK8EgWbpYrLmUkKMxvdGrvXnyBHVtLDuXLkzzLqXcWBXnEbpq3iyNkTge7RYgC9JyAKt",
  "key11": "2MA88taZ1aKAEiDN7LXhm3yYocMxLNdyMXY3Ms28gJjxH1uYBh8Jte3aVpQUBwdRWEgmRDsRa2epYrU8PmP5Jvs8",
  "key12": "59TLrES2bCaKvyC67vLg4cDusqDuhh9RM2PoE2MDbP87A7Wd6oPJyyxV95x9n1DN5epyYdfxfz5ZvfczByT4vWTJ",
  "key13": "Eh2K1ZQ9tcRdbQTebu4rMZ6S4R7ALpTCwwfZzP3B8iMM8k5kncfcYrAW4znTA15xJxVKT61RB5RMBGVvCCbjmSK",
  "key14": "4PvFsexrNkqPVJvbpg46w1vSVHKgrNspLNef1dUQ6S3W1rC7CEfhyb2RDmLA3sFL1UNhrug3dEN436xZM2upZDvN",
  "key15": "GVEWKxJ6NY7C1TjJ3PbCufFt8ARLqYws8ytub7CGQmkTSg8n8p9cizhpvUJj3SQokWgo6ostWkXGSkk7cYLQzEc",
  "key16": "4yPGHArVQXrNnoaH7WTCYMpWvqFq5Li28y6LA4UEaCdFbQK8Yt7wYgdKb9LoUK5QkAuia62kNsAom67E7sTHFvxf",
  "key17": "5BzGk6Yu1z9q9vfvqSPQxCrNjF3Xk2oq9s3fhtFJAX5wDYC5AYX5udMvZsc3nomgkGPNehAZTfpnQFbgMUMGHWx9",
  "key18": "9EzYb2utJ2ciK8zVZZcBCQvaYR1ZtPSDYEfFQ8zW7UVKnF8gqqRQF6Yu9k8ALtnimjmkaG6jT4qiLqopAQCeE44",
  "key19": "4Koyv3quuCbuqN983WtgBZRjwByoXknfnqMgkCHbU3LtreKS72d15GyRgmUqSL6srKpub5BWzTbv55UDhZisgf3d",
  "key20": "BD2B1CMXbUxA9FGgGydwfdp74U6pmxzvi9vcasy1VdTHyedc88CUVmMhbtGAwyzWTjtv8XmAE3E6bLHzE2JUcTu",
  "key21": "36BotCg61FQqpxDCUEgUnjTshte4kuSUNRuxVMW8hnDb5x43FkXxQcf74hcJvy8Va12LDB5ZmxJ7DuL6xfZY7jgZ",
  "key22": "3EpMmnYymp8YN5F2vBrHpxopHrDjdsxNaatMtAqmRiphmcbsAWayyra1XPEAQjm2rZThyKvDeD1u5WhPpxkobB67",
  "key23": "2Lchi7S2GeWubFpB29Z2qWEJ8ytGqE4BBqwZsJQo3ULNUhcZKpBHgibCWGanrEVoNwnZXDV9JBggmiZR2oXaBAkK",
  "key24": "36STdqbscrLENbNU3UFEYHH4bgcjs5SGhRFiXN36KcGchucn8FB6d5KdCUHwarut3hCeUQbJjinZH2gYwBnvF93m",
  "key25": "2LFbVm4GaFSr9LUvzLmWTsU5iBhGY41x1S6XGCboaMG1wFYJmy8W91dSCaEz2516FEC1T5jB7L7bTjgFHPwWCzve",
  "key26": "2y4r1aLWefR6Wu3WiqsAo93JG3mqaHr6wzjudXKdZ5vQwMU9GVahdSGSDrrsn5UtUCYr4QJEoCMCp5PQzrFdHY1H",
  "key27": "4jrPB9riMmYJxTbVeRhnRP4WN8WvHybUjtKooAypKAb2Wj4BcvBQrCtXMChNAQBHJeQ6o2dquS9E7nBW7pEEeX2m",
  "key28": "2uoDWHHhHMQaqKLGAKBcFS7K5gjJD6D72FbcTUAaWHnyrgpXm9pPdUz4tNnynQ5gFP9jq7TpN3S5v1eZXAVEp56d",
  "key29": "3Dtx5kQTA3E6yYf5zADh2TmzGDdTob3cSKQq9bR2Qsmne4Gun2PS1pMJJ5SSYZQNwdTQDoFzCnBiw2hdRqxhJSUX",
  "key30": "wpsRRoSze7qAxQxQKnSwfv8rxUNSiNLQUQ6Voy8C2QE9BFypruVyFJDDwoqLpq4gQJ3H1bd5BVBNSMXwtpXjTvE",
  "key31": "59fABaZWhaPy7RwGrpzTzNz8tDZ7GxTu3e5xUSunN3JswHBLHtg124UyrxUfMNSBoRdjWpFZmDjFnYUzeKCJmUsR",
  "key32": "4FDWykg7KqwhAeGA36Kiu7gGbz6qtdLZwdCdVxaTeuiSpFg1pXhCCfJLnQbVEPoW4DQN4SKEhqUN3gR3DHgV3Lep",
  "key33": "25deKMNktDXFvMDSY98KrE8BJjdXHGiKLSTmVS5epoDd3Z9vPZqtdruN4qJ2f1PGuSNGTj1Fk73282N2ay451WXa",
  "key34": "3qoAowhdp3tJ9G7SzHxSBqxJNGLxnJe8GHbyQ5F4U8KTK8YCmHqfuSfMsfYrdBwPCRJ6xn7bbegZKBmez6JyWaT2",
  "key35": "5F4vxsmVeAiftw82GQBfvK3EdHwAvyksppE4jAkG8xFat2CcqQaxUSGdGWXctiCh8NJnwp3QbkWfcbD56EWi9Kgp",
  "key36": "5V5DcMunpye7eNTUyiWE2FGP4Fgu38tJrB4zspeD1ddFeqtqtWaW39v1eXnZVQ8nHn3CRTxbtCz3cyoukqXJuLFH",
  "key37": "2iHBpoBLuPWbaSFkm6JJsCZZTYdGEXyxMEYjG67Ew5nRCbbi9NzHYDGXSwHgd8MGxTN5oPnMRmUCJ9JKELTEAjRu",
  "key38": "oMrgbC6qtS4bCgw6Gf5nYegCvEHQeSLpmksv7y5yJYsEE4ifrxn3ezRVh2ZbjGC545mQP1LGQtKxjraoBYyyLha",
  "key39": "4Kw7uSvxLy3BvpJuhE46aYqChHSQVTats6eEzkixgVq22BYcDghj2gbpz5wR37m9KiWj8xj98qBaURRiJAoh3eCe",
  "key40": "9roYhRdwfTr9FASi9cC31Y4C1U4SCrK1Ru9ABXm36TcgDKgqWr6XmRLrkSg3iHXbbtTjwtJ6G6CMhQQsdf68qzm",
  "key41": "azBZqRYCXyzJsAuk8WTzhxhLCjFueN15VMccMmt3VCh6GDe3hWWZk5EiScZg74sT1J1b2eKMoTcpBxnN8djrmbE",
  "key42": "YKyuWhkuRX3dWm1NRNGcMRgf2BhPenyX83UzSTUUZ2VJqHvXYyDGbuxbxdkdWzfUjnYuK7p3fSMVqum7UEKEDdt",
  "key43": "5896gZPwRzQrH11bNkFu9PYpAz15rFGhvWRSzXZ8TYqvAsNJe4ygkqPsuU1RsGWjkJWhqDpiUL6qoo1iBwh9xooa",
  "key44": "5aidFBaBFak4qGdveoKrNFYRJnp7tabpmzqwfPqBDymmh793syoU55KGFEmXfd7VcWCSdvrMHmBBGPAr5MDPQ3LC",
  "key45": "2a6xaFtSf38Xmi1TMFjKatsuX379MsMLzy3mCAdPMrVAoSLeoo8szwZTTGysDG4f6DVutvGmoBxB9u91Xd5hJFac"
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
