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
    "5saX1FX2a4iteY6J4S3rYmztFdL5ZH6xqyFRABxA8eygXQ6oEhNRxcbm3AVWsod3TzB5S2Bgwoia6qm1dEnELEr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eWFkiAEnBTBsW1f5Gsd7WVYHb49xwsLpjbyHAyBDVSCX472MGq3CQ65wUySdsmQHyZLcmmWGAMm9b95285k3Mgi",
  "key1": "2FQ4ZjpF7f7smkDxWrzgVtf973J39pd2XQe5LeEMVpJMK7Ty58CzZyQTHoS3puyjeh48jkLkr8gqvy4oQopgKUv2",
  "key2": "24CWuMMT6kf9tfwUCjmTaffQaFiFnP3F3EtRHHvBQVM59yguv2wYFrF2Cew1LA59DjozcZeg6ZizhsZzGu3pBw1F",
  "key3": "5pVWdWMKDvDRPBqJDiiZEFwMArzrFHvBNoNbhkRoTJbJDGmAtXE9xvriK3b32xg178BmPPWRXh93ZchaHZtddg11",
  "key4": "p6EPbhn2EbekA21S8ANMu7ZjfpdfoKPCxLFQA1qsrYHYi1ggHSZ4hzdEmUFsynphraquChEmMPM9STWRcshhL6D",
  "key5": "5r4cRnARYTyiNMaznJxRPTfN4gX5LKgj1JCv9v5hFJcCTtFbkFcc4qS5mHTK12J1X42n5oRUUpU9PQFts3VfMWVk",
  "key6": "5NacTsfP8F9GyUBTajaXskiUPJ9eSvd68CowiRctmWFGb3zt84zFSPodWjGjFAVsEbwypWWnF8cdafPQHoKC7cPm",
  "key7": "2EQBiTU2rMbb8KBUGSrZbrcCFRZ7qnSfEE91VQ8zNQo5VGy8pyeWoJR611LSzX8fj3kY5sMZj2Z9kaPJbenPtdGm",
  "key8": "3bK3f6h96FFWaVHE6KVPgC9w4NYMTh4EFyioU7YpEAhiML7qSmGyokZNXpxoUVenC94uXyXHc5RJHq3w7FQVFJQt",
  "key9": "cLSwYfe55xT9AsqQ7LqUGJDctMAjSbQYvdBXPN2sbQR2eCj2PHtMTtzzTsy9DrsicDFbm7Jc7138myHEZVYcQSY",
  "key10": "wnhcqTUrGgs5zRcUhKA6u42pvqen83BRhc6SS7L1kT58LMabMRu2Kvf1t8Rg6nK8kZMnoZRRY8DLRp6urwiLs88",
  "key11": "XjPwhn4UjWHBBWwkcKpdGxv6qiATu2FRMR5xz8NkBhaQNTG3TzY62k3CCwaTfyMGuJ9ss2X1P6ZUhsbuotefTMC",
  "key12": "3k9WednT2ysirBGPy7KGDjuCqo8QhgVNTtpwY2ZRA2ek1vQeVRvdCLXsugzBjyRF4tiThEwJTzeFuz3ffW1XQjYV",
  "key13": "x5zx7Nnhd49kb8jRsCi4rhY6Frr3sDkPvT5RL8Hdt7jRXerrQemYAYphvYCUPjPqjcEX1ntVru95fkZ9Sf7NcqM",
  "key14": "57dUBsMYBXY51cqq6EXjizg1JCvdQ8pKFbyhEC7TA1PM6xpyTruhg3yxCXxoXZGTwLid6VqXEkWYXn5J22AXgwT",
  "key15": "5PNFQP45MggD5XsxK9tCz5s1WCuuxapHrmu8AXk3QDkTFWbeHupedpoXS4eJG68eEMMDacAiG4U4Sc9Jn25WSAmb",
  "key16": "ejhTzGtAfqvzLLevaoN5EjhXxLtwrWhWHRrvpgTricSw3oSedBx9kKniKsVJp8PAp3vikLDH2KxPGue15GYfeb7",
  "key17": "3kVR7kvbMAhPx4MSBdqfA1TLWSttdFJVaNP9LWiu4ufgFW5ngLEvveHV9puvR7SrU8GCMykSGdmYLYNVsTbR6zYS",
  "key18": "3Q9Lsu6VqP6GpSY1ep2rbrUmLnDYajDjw8w1gZMeQdWs12wPhM3Rg1c3KFMSfPYNF9Eik65tfC89thEMwbJ8Gu14",
  "key19": "5i88A3fBBLFkwHe9b1fHi8ZkY14re59Vk7xJZyQt6vt8MC6bkBrss62jTPJDyiZKmLFgpAvf288VXFU9kEfuoEJd",
  "key20": "25wed1hCGDjsbAYQB4ZEcoV4NzXg7BbcXz6f5bcS3V6vXW2mcbbRkXbxXKP5DvmK7bZmejp8ckJBKty7CtdgmizZ",
  "key21": "61g8QdmJ1eBxKP1oUeJmE6wj4ZyLXBfBu1i4DZPsTTYfgYubjzr2Lm5ZrdEvQTFhauMxxde7MrQFjgfAuSMyq2Ny",
  "key22": "2jguTQzSMuvZx5EdhXv7yiY88NzD8sPZ7XSzDvGR37eZrQu2NrLG8Tpw1aKe8FEZcTcTKDg4MiozoJ7MXaN6BRT5",
  "key23": "4YaLAGoQLGUANvriP4ftgXan5iHqorxVrKV2L1iJ8ddCvTtCvEEk5TA8QybgvrhaHYZg9G7YK2WtmUDBWxDSZHmD",
  "key24": "3gzdtEkx5rVZJouJhVYfPhUi6epSdBXGQZBDghsFj2ZZ4yicTcJMDj5twMYSy6Wdf9oiqQvVfDcaQbhUZKJWsAcF",
  "key25": "5hom6t6c23vxDDxsg3E4yV5SLFyAVs3cwSvpu1sMxxJtFBrDLP9i3TF44fb11mY3kzWAwYSjyf75WC1D6zhFNjUz",
  "key26": "2nbGQyQtoMoooDR933pE1Mtm8GsTTJTJXY7NutuVKeNZ5KazGSNpgxPuop75BYiq9hn7yDNXUiucNPNbcLbPL84c",
  "key27": "2t8rfD1h7gs7cki7aHV1gWfHyDE5TtZeWST9JDjMgStm11YrVHV59TWCV1WYZa8iTRCriMDjLdLgH5HZ2BTRF6Lv",
  "key28": "3Fq9KjpRo5KM85iS61tVWDRA4vnKRKdJXLiY59g1NRPUbahaeTAyXVrcJr9bWB7k6iotDB7i7H1MMmrVU1AjDymY",
  "key29": "3NK8FiXnMvfrTBV5MoSq2W7pocYh6sGhP7FWzqerzw3Ar2Q9vEVBzPHSFxPfjRDqcj4171WvMZi5jtqXheuGDoKp",
  "key30": "3cmvmyfKpey2dbW7AVVwNGnQKPE4uZVXHKeV113uay7v358ZcU6JUxFeJXCC7FD4DVA3h465ycydCP3WbLBfChvN",
  "key31": "2TLzFxThvGtYUU2Z9DowkmVsu1R97FT64TK57FvCQGZ1ctVa4hN7oSMoG7EwX9b9NLCfdjmpwLS9WMgNxw1iYy5g",
  "key32": "2CYeLX4srZpEffAiP3RPoQz7MjbHzHPQuxZPuTP2Hjo3EbbyjGpTGHgfVW2cL46nhNyB9R18U3Ee9AynCZoVP82W"
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
