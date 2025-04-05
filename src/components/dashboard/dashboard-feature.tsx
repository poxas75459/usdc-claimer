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
    "3TNhtTHZnu68ZHH3u8TGf8QL6yxpXhecktMuDJzfEAzTA59GbUAkDPxHVtkbjqFJrRsbkorstTJT9MBQPZnBFAx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qJnUgz5DuGyNmTAFdmEpjGFqB6yJk39moWBsMXRkZqL4Xnw8uTxQFACzWjtKJZQNrCjXa2dPMxJm5TenRLNMobW",
  "key1": "9H9xs5q2hy1jcX2fRKTxseih79dV6a3ghXLNon5DytzZAxsyESGJzJGh3QmCJN1GNN3rajT9FKgjHiz2aHu1CP1",
  "key2": "5eiwAKL5Y9CmpU6VxKE6ZSdYpuxH7bmtFk255gcjgg9LALBENjZ6CiEhfBcTLSgxrGaVuAccCu5jeH1EXqvePym",
  "key3": "4tetdV77x9jCLyG9PSZspRZSV89iRiAgYRX7WS3ASrkkemciX8guH8ks7fyDYkDuTrC3K1jQNKq7AFiNLhHYNAJG",
  "key4": "5GLYFTwu4fBj6ik3jSHDgL8nUaffae15n7Lx5E2xe4R2P7kqXzgushpapfvhxwJ5TYeTZeLvM81V6Ww7uu4tu9QJ",
  "key5": "5nWiaKjyo6obAWDi4oo4VVC84nVoSV3Y2VPHrVm71Ko3J3i4VpjSpYwnn3dhPhQpdE9S6g5UZJ5DPtWL6HoPFUzJ",
  "key6": "4smwJ1ZE65n5uqKobn7kfCjzvepUvri4GTDFurjuBqd5x9nKMMdnvfJL3W2q1ZdyMxcBNoSSsDn9rmLcCAFZCFzz",
  "key7": "45oNMbk4NXsuV1ae2rF55XmpFZQyPkoTzay6RfGhnXVXPDxtWCuJ1khS1YXyiPq9cQHGg62c5KqQqDTonF5oUWGR",
  "key8": "5aS5Dj9jpz5xUzbKicYqxhnhFfGe11MRYDN2ohTNwbUD3xLPYothP7E8bbU64eXEqy15TEWowY9uGRrfikq1m8bR",
  "key9": "Gi4BtxmRWCU9n4kd4kMjuJHjNo7eBzKKLYJkry5MTBiH81y4bpvWDbN4Yx4EdxJUaqzACMhv3PYME8icvgxPCaG",
  "key10": "3ZNqWNg3jYTkdocsKX9fJX8cZEUDjzKVCfJwarmtGzUUQYjekEnPh1ADo3fjU9VBXF5QZ62Z2cNfcsZF46y13BLp",
  "key11": "663S3pAVZrbKP9aLvbuWv7wXAoEYzufQvVfLWeUHrYGZtpUeeKRE7kfjEw1YVbEsdgwF74nkGQvkoiJwMT3GMQZz",
  "key12": "2HjDLahmX4ayZMHus39mvxYyVjQKTAckPS3CfPF88vB7vF6VMgahSKM9DLFip4NQ1ZnpELJqmj889tsJEuWztx1F",
  "key13": "4swJxqJDF7ZDzpLWdhDJyqUiBSkEBgZzKCmsz46JaSh1b4PyKdiv1GwYmKzpov6tBu3bA9mA5udgELij9DFn5Wyt",
  "key14": "65fagswuFb1U6gLAxmGWpXGzU21JPRRhh449z9QT2U4nVyJo5KFCEa8nRhqR2PDs9t8bgFraHNQ2USYYk6eWij7B",
  "key15": "2kF9SzkGwAFUQk4r66qFXstcnBZhcynS22TqJMLk36fUjagVsuURCs6GmZPteYKyvA1xQfQj36jEEJSdSKGfWhg7",
  "key16": "912acFPKbvnmQtbftZtDVqBinLCzHzqqnzrcZZfzYA9PMEfFZyfBT6dqBuweRoeixjL6FLucxavkBkhX1VkFwJY",
  "key17": "64YtgKgYpAsYuh4Wrqs6vngFYs3HizgAPRgxDoTeG5A23CWDCb1fSiznGmemEP1sA17Lg5XXjhVnRZpirEgsMVTS",
  "key18": "2Lua7gQuiUPiipzFarCB6r1su4bTqtPt5GvT26WRnG6jHkX5sQrvG9ADUwcDqqKsiD88EnDSCvbxBc2nZTiBTFNa",
  "key19": "3PU49QcmYETnhHhXAhaXiH7zGjSu3dvpNukwQa1GAAv4SXCYTXY8eMVg7Meo5m3D1w4AeTZVYAdu7aL7utxMsWQ9",
  "key20": "qmSCTqVbREhbGkMRqDnVmWMUpNHAWSre8n8J72qHLD3PEy6BmJGYWaVvqc8TovGAX5rDBSbi2pCMCJ4ooStiGyA",
  "key21": "2HqQmThmKU1Yu96stGeDpCmU9gyfF8P7kxTzrcV8A3QEqeYn6cutX22futkKTb8PSvtZnT9JvMgCD12jBrupBYTF",
  "key22": "2e4faWt5gZ1ojgLE1vttCsxjCe3w4q8gTAystvuoo61WMbbZCkchcbXP4wSXZzHF1y4NjXfGYvcpxsgDJFSYRXQJ",
  "key23": "256d1oedQZQkcgsK5DPDtEUmds3Hd6iNAAtvBsozeyjT8wxSqU2M4Xif17QyjXuxz443L4EZLSwiLrutgWTHRQTM",
  "key24": "3fUPGq9vV1xHEWrYH9uYzy6BstHMynwqamWkaq5YzKXDUQix1C5HDegXACzoLqqwa8pvxNyw8yTpQxWBTaHehW64",
  "key25": "5A2cYnxqZoLwk7bPenmm6NXpoDkizGW2GHVGdDUybuR4c3jUeAHc4KtsWLFZaoszWTmGYR8vGHXVDD4Bc7Rsk3ZR",
  "key26": "4AK7pjUHMt8g45WMY8mwRvVDMbp2uRFFavWniQK6UN8TniMKDvtTTxCB229JdqCK9WHvhTFcexDeicDyNU6u6TDc",
  "key27": "5Jm5dhLnopLiJFbwpHDbY7eZoZZqDzubaKANNqQAqqep6uytRVS7vdGxDSjVL2j1Nkmbjy7ug4FsJ8J9iMJLnjBs",
  "key28": "2KReZ5ez8oJAAVvYVz4vPeGoNbQ7rwUzwSQiJd5z5JDTn3uAtepiJ9bfSnTKmLWDL33ZEd3WuNdLucteNekbaHYd",
  "key29": "3FHwvv3pYXj4DgbSfkbJc8btQpDUpKSZSBeREYaiccC1WqQxnP3zzYjtMGHkQ2iSud11WQvNh4DbiEZsusKNLfnu",
  "key30": "5TvVkXkjvuPCUcnDHFK3CiDwPaBKZAbvY8KLGz2VWiTm43HmcMAfzPUWy3EfiNViZkEUwcLX5bJQx41adCUAKj9U",
  "key31": "e8ANUxSTF6MsGiNRuCWgWT1i9LkLStp7E37iQKbQNGJMbaaEmbgFMV4x1HCvgLk3NZFPGsrBZgabt3pL8D8ZqG6",
  "key32": "41QkYdLymh1i5TH1HbgmqSJhsryGzcdpEHRRw2E7xHzberdgwVnFTWtq53T5CQy4aWedoFnkt6S5RmGs38R7smyv",
  "key33": "2Hm4FBZe6sJXPWDTnWkLcUh2yy6RDajL4tXAfXTLEEYD2qruMTJaQ3j4q1rvsPcyV9aaco2MCepBHBr4Nyem9ztF"
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
