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
    "ewFJmzmz4ppMXzZoX8AQhvmnJVGC6yHp9cuf4zjQy2A2tS5R9GjjsGJDqDLkVGQpNuJcLfZygdwXs59RrQRZZJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f3r9WpgoVSf2t7fWedPqPHJCSQjbSNXwPT7aLNP77ciFpS7aEHo72fNrdtw7N1snywdwUV6jvkYZ83FUgEvqmnj",
  "key1": "21SFP6k9SXVpo7HVtBRi2id2AHoXRV3Wf8rP2Z9CQ9dc7EBT4m9s76hKyhRW4javX2BEVQ2MVZibk3SxTWGSZZvi",
  "key2": "32pGwYuh6Wef6wrUvDDmjKVGL9u6JbQjeJTRXtaXZ3PmWYvJBfMnjnQfAK7t9RuB72TAvjjGWTmoBmWwzTsuVSAj",
  "key3": "5KcCVBb3cXi8vEWuGXHDEUQCUFxoBFRF1nQmVzrSuCU4ar5qvni6QXopStM28cxe6wpPcmJTE39vHbL7fZ3NRXqY",
  "key4": "W1nHpBmFVfhZnQQiNYz5xQNfrp5iseCLdafgT12BYUD38PS7sjibNFmUSoULgE2C4C3CEe2dZfysHd1GSkhLj5E",
  "key5": "2hHuPBfoc12NFVBSXfrNkiegWpspGg79uYdmyxdmTcThFYotono63DeyKqXxhSFKJX5UM57xaRNfkEViXgNwsVPx",
  "key6": "67JjqC5rwjFWa1NjUJQuUm6nSN75UvF7FdbsRdpjKSC8WsNkC5tJVH5usFEZF8SaiPhsEPjMhjUTGN3mym92mpCA",
  "key7": "3Fq3VzqUWb6LpVj6DTLJwoEZyfCz25m94uiKcvykFFG3AWPpnDnspb6o4vfJvVtn6GV2ocfbwwKiB2ybnLaypzzx",
  "key8": "TLrCN6WswDQeDBtvnNXrK7AjCbnwqnititdaZKSHeB9h7dGnVLEbyAsgjDS2CRSe7acikTtCvJHqBNny5kyJ7pr",
  "key9": "4XyRNtMPVPz7PHRjY6aYADoSqkGdYYa75NchjnWKH8LPPGbyJGzzksig5eoGV82izs4ASNv3dLpCGJ7LME6zrqvU",
  "key10": "3u7zp4WiKDgWfsYY5x7qgLM6narEa8fXU5ASdCFoJ1KD1AEJN8dGn8oKtTX5mtjw3JBXmGnaEhmnLQXrexckegaj",
  "key11": "4eGyDT3au3T5myRkns2XDiefiwCB4sqP9SBosdiFTczKwtboWA3YiiSWN2mSk52uw2r52Xd3kyhdNiHpsEKeCZkJ",
  "key12": "yXSG37dMotSHC3Xfj7K16jvVPmvAUvnUw8q6Z3twt3KV9LvLXms26Jx8ms2neHCxFZBUNACykMZKSSqdCwGHoWQ",
  "key13": "Ccprxa6msRRdH9Ere45K3zWJVZx19jegGe5NRDFo4saKfz5ACDqqjTJ9Rodqjhx8kKre5R91cKSrTSPGoR1KSou",
  "key14": "cyoBanVeHtuFregTqbi6AGuznY6eo2SxuMttPmQhuLnz3DbU8HgTcuzi2DcYzhM9mkNUUSvJMb14RnGVJiwkPK4",
  "key15": "3RitvsyeT2Ej2CgFrPgpcTtGBP4bcPWDyM2ejqoU9UijWEvUruVz4M8xtZwJF6AKko54H4agfMcB65aEc1ZmaqEG",
  "key16": "418joEJzWc4Z2hu5CAqgXTBPfC2Ag9oPfQJ3RBtEWsbRXDhJB7sqZtde4t2pNhkbrS2BMoa2FWGx5pufbgSNPMwe",
  "key17": "65UpmLiqnHhBKVtXM4emFEsBVsBwoPDs7V6ZXummxM8KHSHsSqac9itBSmrZc6MP768Va5LokN1CSU65TPxhQcpK",
  "key18": "tuWhkBn4Ssx4WaTNWqC4nh1Z8kjXs2jfQbMCPj8miJU4RWbiMKzH7n4LVStCEWJrnZ1kLDZeDCCwL84kSsiM9rM",
  "key19": "51M9kKFkXQEsiNc95KpGeqdH5CRak3YQyS3664eRG7xmqDkk3CjRH3gnKDWue6EzQ3QJhaZJ6TmLe5ZpoUZT77E9",
  "key20": "4w1MhLe6Lz7QhTagffexLNPyp2XfK4Jp5BvFmJgzc8DDrXRm4khwa1wzRByGLZxZocHhn16AvGtV6X2UNKeU3rZz",
  "key21": "2vk7qSk9EUiqfAKvYtkrsJyDjceXp7TAfyYBrP9ryrQERASJyGSgBS7E3r8Vn7SynG1BMVt47Xaj47WhmtChhUs4",
  "key22": "psZWDzLBSEFsfiNVagUMic5oRniZnbozWs16bZ7FAN54NYdAwg5AQ18XCZDtSvG3TrSKvNnQhz1se1RGb4Ry9mK",
  "key23": "5EWTYw6bxn6Bi9p8YSe29VFB2D9EBDYUgKtfr4kqnkUscMokrfNhequkxFcc99uHoC3WvtfaYdoByR4JEwiCVyuN",
  "key24": "3PZ7ziegeRrVG9YGM8FNDehjFENRsP4EBL52n8W79E3Qa9FEdzF8QEw459vVouZxv7inNxwMUuV2hf6E26fX5hps"
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
