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
    "2Y5CmbHtpgbWHJQMWV7YUhPbmuUzALaT26G25ZJ36mpXbtr2uqhHqFQdgeERb9jeS7PgSgrarAKpov7nkp5GKcBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Buc5Ke5EkWYQuwtQtLSh6ZmV3NBBVExboMcXduvzMojW8XGCqJaCfxoX617EPwJAyQUjwUi6VSEffU66wZEQsyw",
  "key1": "L3SEMiEP1uEdBwRzcfgN2kj7myHWLB4mGhfeVJy3JMGUzDM3P6M9G6TVtKSzTNS4xYEJN9vmSPuj2VUmXWvmYiq",
  "key2": "5e7aSNsdxrZVB8NRthMa98Z5uvNUDD9hkXo5UNbrskfZcxFijuj5qAmjWmJUcp8pds3obirgxdyiW7E4BVTwxnay",
  "key3": "AaNhY4S7dAXR4VeQhjASBYoAWYgmPZPPBVDbJ91z3XyRajem5Mwo6CL51z4NHvzwHwS72Q7fY1ShtMe6NgjLBeU",
  "key4": "5goYf2Y2NsMqzy4NS759tNW1Ss9FtibPVmkrpnuhTP8jdyytRovtghVboi5dMqJQA3bexSMud5grbcgTtw6V5AJn",
  "key5": "EXaJnc7vNLB3Pg8QsK4nMnsdpj4Qsiwjj5nEtw52cuozgvBFKewVxihjf32TAfKr8x9NFT3Xwxva7tvJ1zqjiZk",
  "key6": "2ggQ3m2AmaDc9T8yFCJnNoUew4rBEvtgx1WDCRvmvC2CsfpDxRTnqqeyTcPvDcY19wmyBG2L4bAvRGtsawPaD7uV",
  "key7": "21YcDah5WekAKNKC8vTvNZko52vzHKrRfQLyd2VQrVyUfpqJo1pe64GsYuLTZ8Dz6NXesRGkn62NncjaL7GFAXjv",
  "key8": "K9KnEeeLMLEnnenYNU84dARQX7E6ouq9TXbeiFc3V8z6ZFSuoeekvXCmqTimWedPXhkfVV5NjMZFhhioFBXcmEM",
  "key9": "taMD8ZoCNT7EqVYaJRwiyAKdVphM8ZRzJgbUZBeJMBdfgkdtZpf5tkfPFBzqA7FRcmXMMrR8CTkgcnha6eU6a4Z",
  "key10": "3aWX2SuTH6XVUzkRgLpsZeSY8q2zzuTLhC6jqSR2k7zu1fiSxk4uzPaCxJDXNXt1AFXXnpVcL2nZFFcTtmaLxVMy",
  "key11": "3Lbh2H3NYYQmcoRp4m4upW4hkWyHe1Xt8DW1DZsD7VD1oJRUs38WeQ5WiuwmCwtUdVAbXeWypZCnD4RnacToJwC8",
  "key12": "4KwbxEhgcmu6iGXBy21QHJSnMex7PcDy7wau8h1VTCsK8aRtvSWuz9VyNGZ8n1S8W85BzZQsiY5dg1W4Ucyog2jK",
  "key13": "3Fj2ox14HydqFLHot4G1fwkZRmJRuZz5ohYHL9SpgB5Tk39Aacx9obXH5BZ4AcNVec6zsosp9TFZ3P6VkFVLz42Z",
  "key14": "32iGVARfdukY4uTriRhCNYdzLx6uQjKmobin5hLQuCi2YEWwncHmhzbKFmunMs3r9cEPKRDsXXLHXMxjf8RhcatK",
  "key15": "2nbjRRtFsnpLzn5BfHmSKBCYrCbvgnccwtp3r5qz7RcSZ5oze7faNB3xepRmTQjtcn443j1Cc88j83PDcVBDMVHR",
  "key16": "EixPVm7zfURkGL44WU4KAs6miDTAQrc3zQvfGpJ5sMpUFLTwWhaoarWQ9Bh1qUizj6NER52pPK6MuiP6A3YRhJa",
  "key17": "aVgLcYscLAzcXfzxE2yYTTjp1CeWYyE8QevD522tF79n3bHzAJuE6UgjNirSMrEBmb588zzHvag7P9ndTDCX9K8",
  "key18": "Qsikm6nkth5JwjZWJDiUrd3BL5Z44FHGzPaAz9xM93qHhJ56YzhMXhu49rgPHYTcyYAAAsCxCLMrsNYmYeoovPg",
  "key19": "hfwK8mujoRKSWPxUU8ULYb4j4yHchpgEZNNHq5poqCs91o2XzQqHQhuBibikGMWWzY48wnQ5vvck8xVuAcwhFaz",
  "key20": "2SCvKxMvBe3ETcnnEVMxUWJeZ7PkjEo6WNYyjAkSNv1h5a8aGqjDR97pHFvP3MzHqb8aviBYZwCuN8cYQrUtnjFt",
  "key21": "5P5YBHKNXFPAZeczruzJmH6Qb9oK5yMNF9EZn3XJVg117TXPA6EXYRXK4gSuUpumZ5e8Kt17w6pweVPBmR3gDcrT",
  "key22": "5r5AhhBBCPTanANgfcz2Ln5AQoupiQtKBfTHCYnMraXTmodw1gT8rimvwcxjPHrnPbEPi8qUGdcqhr3cdUyEZL9P",
  "key23": "s2XH64rbxcHtRWwsNgUG44t7t1fqmvoondzQbcbGnfd6iyvyqtLQS8d1WGwMfCpDPF47nxPudpPRyVKr8TzWLRD",
  "key24": "2vM3uDeHkjtsai1kx2oMT9sQuzhG3NfVupsyP1dCUtw48LFupaRQw9k6MtwoRTkJXjJM8vFcmk4gYYkg3BGgepaG",
  "key25": "3VNNR9zhQobtQqhfKSuwF5rAhDek4VDtfzxHEd5YSNnmnpj8BxyVGjknTDH5tnVTZUiwRY5WHcsW45qSmQ6Ye29C"
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
