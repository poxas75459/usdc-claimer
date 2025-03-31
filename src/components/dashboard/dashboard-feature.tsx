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
    "5keQD9UJwteBXXy3XRgpqcaW9qHpp2Y4RbPmnW4ZnrCGf1tzkh5wZrKohtvqtDgy11fjvziaTZ59gqiVRzwHviJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YvFuP1oeG6z1DSZfRybZtrSj4vcwt5hhRg3hhXCuZ19YeJjfit16tshwERKDaWdRjpsrm61bTx7jHFmYbUzHAFm",
  "key1": "3dnv9a2LD5dKWUP1HWbTW84sdUkUWVgPBX12EXpdFYHFmE7KpyuQ7QaVjWbYJHyoiimVXGbyhaudcRBAaarBx57v",
  "key2": "48dt8GqUMKMwPiWQs5bW5BiKBRuTSrjf3ye8mVcH7M5RxpirT3VePF1aNCkJLPX6ojFnoWT6Z2GJXNRxtWi39dKq",
  "key3": "3zVw26BPdU51GKoM7vceuEAZ1jhQacGGJ6pZbg4rtmJ44sGqY5LgpAyMQb5QDhExZ5LVznmLmnSu7mGbcvqv9b4h",
  "key4": "4jApEmifAUrLdyx6nN4B4xa4Z63De3xFycZxsiCeUoDvec9LGevwAENKYJ5o5dUv1LGzejxbWBTRZB2AMNGrq2g2",
  "key5": "55cWhKiTU5i5k9aXPEvspzbMqxLnKUi4KgkLt6gv78Yzi7N1yJrVW1r75ZMcfmynsNvKUMEJJgXbBnG9hgP18sLM",
  "key6": "tNRKRZ3oPUjP4MNQXxiTBQFFiYpt3wWfBErP6rHcgjX91f7NwwmmExmXiTsXonNMucDYYtZs37EVatGH77Vm3vN",
  "key7": "2KP6VWFC3crotwnVerAPCC4XRkVU2kLXifjx4o2SQU332Wv8SVzXuurJfTjgY1WFiLYaeuY36cU7f5n4UJWK6A9S",
  "key8": "318An5GyasueN9f45hMYqiKLMWZU7SQVHkGPd7pTdA5pjnZ8int6tLQAwwzbE1kGMNCEMvr7JxmPbJow4zMEYEfB",
  "key9": "4XxQq35V7Yiqccw1SJymwvP2NpnTro1753ivZyhzM4kUwkvcEfaam5bhFPs2C3M5txmZZtaita42EdRHC2EpDXBN",
  "key10": "pyqbrwhvfnbCPXvT3RXGqX1DTLqi3UY6NXDqV6P7QJKai8MQyAfJMM4gU2pATdADwLAw5iVp4kKaVXNisJBjGhM",
  "key11": "3BUYZ1uhWaMng5Cin2gJkMc9aBZ2Hb8HE2CwrKoHc36Pa8ah8nBXjJBBVo7F1P81W1g15vUzALhQmdVj9P8TBgiB",
  "key12": "2epJLKP97cuYMpdy1AYJUpXDhUsDUtNnC3T1HPjh2dTYbcRZr8SWjrzcA8rYuxbgZhfcsj2p6dDiRUPZ8HH1Sb7Z",
  "key13": "5ZTKWkqfeQALujxrcFFafdo15z5hM1raKuF4Av7Lgf2e94Q8G5gonW3i65kUJLmY6e6N3QrBvkWRSfiEUrrPcKAB",
  "key14": "5MrSm6SFPXRKVCia6TqmrAixrdQHLck4iBoa3paMNsym3GcwLGdhzyve9bf44rmPZHn2hjPEh9kVCLz8pXuifQ24",
  "key15": "21W1md4S77WGy5yXFrkPqE9aWSSfBonQ4P38mbyiAzAJfbaNqLdjuLsnKr3iwYyCTGqiwLXtZUEThc4iLPkGjxmm",
  "key16": "uGZ778CYwHiWJQ1GQuUqfsFDyMX5qfo9ZWPWGMpTBrgpcNWZsqPA1y15LLVnZQhW7A2ivQhUkkvsSMNbEUBrHot",
  "key17": "4GfcUEHR5vWy8WQ7SmN5w43J1pS9NwpZv6acg7nCYUgGtgxAei46vcwkNYw8a4qhnH6VLidiuu6fwyaGEojs3KEV",
  "key18": "3743df1oToTdUAkjWko58bHcwnVimvoLS2rJn3pskUGgyd547gayxSSdkosz8FTj83q9e7YTFBY36AX3Xkz8jg58",
  "key19": "5M3LYcBY9ybfwp5F4gHqYTgy9MwKom79hpeQSp2kSfTUqEdHoaE8PKs2kV783LKiV2idETfwoLQ4mK8eHPGUaUC4",
  "key20": "4JTV7aHyRJeK6N2A8sYTe8z75TMwPhXtSxBqe6WtPCn9JucxX3JsDkLE7SmoE3ogaNffpQ1oK5ZtfYmopYgkgtdP",
  "key21": "53MwJ1G6oYug6V6D8ya2tcKnpoXVXyLB4F4yxP9pt477FdtVScrWHV11WCFE1i3yhFZ7yxSZftHetZrnc9xSbxZs",
  "key22": "4XVHhDKMMYtkCRf337Ea5NpCeZsfFnhHJK63vr1NDv6ywUcqAPR9mpWXwfiXre1H1HLpcFKjqWTivV3qHXp9wBz2",
  "key23": "41m4JwL1nEUfyTUR71ed7PCSinabDw6t9nMZVX13kBshLDZeWocjhCCRXyV2e4c5CN7xKtaSr9y8AAZRxt7Zjvww",
  "key24": "4LzJHsQJWRZncm957YACRgseyC7EEcd82shQDmvsFyrX36YEkeMw3a6jPFRJWnrs4KNAEzYz113yZ3m45hqwedsx",
  "key25": "3sZEjKM2cUK3RCJ7bdYnmP553rpGT3siVKAuqtYCLtTx3y9iM8cs6K5ueRHvKtzwaJyU5k5VvqVkQbPJ8sTPvs3g",
  "key26": "45C9XbXVSfYyVRUyzLUKS1XXhGLLyFpeqhtcvvd9vwqkYd1VM2x7mLbKQwwYvf4kNe1djuBRsELue5h9XMppZZRa",
  "key27": "2ZBvCmkV7x8ez8Crz9QCLeYFnnfLA5uzRdXVgnLTGLQMYCv3BmPZ37T4eDwUsDcBz9iCAGPCUewJJD6rjPN274SC",
  "key28": "2z9ddhzw5BwvfsgJdMeHtdX64gDZ1kP6bvK2hEojsauqdSec4Hg6ANirqkhP5zk3DqNFkqG9ebsWZa5iB6KQzQGV",
  "key29": "3Bj39SysHqfyGat3UxjhLcBCfsepPRzj9X1yHTSWqynh9myHWT6GaUhxKi68ERjZa7gcZc3APcTwGVr4t1cTRnXp",
  "key30": "5kjBW19k7mY3mDaG9AVUYKYucBdCjJdbNapDSbyXHAZ54jPovxW698Qp4MD283XU2WuPyJyAP9nZys9E8MTUCVkC",
  "key31": "26h8i9qDNDN2kaX4BBUf2dDKaSecFnGeHt11duA9GrCgWurPnTvFb2QBT6JsUk9D2gSWHMuMPKAPuzBXWUuAwjKz",
  "key32": "2Md4ovWMX7ymS3gNV6Yt5BvBvqsXzjfovgDhaCyAznWUs9qAAsArRkFzazz2zpF8rKVSC7MeiH2w9BYpFo8bgC3j",
  "key33": "5XGJ7jZ2Nh4gRZtAMzCfhpzyFYyi25emDeGoG2oCv7xZQyPKLpAGKL5AjEALLQieCP6Z7vSfU7FRtuyAC9QjPxPe",
  "key34": "5kR6gxBFKaHKZrGVz8C5pAJHBMENhfxe16WKSzNaUXNf5bLRocn5Agd42APdbchfohMdVRRWgJ5g2Ta8XzYoiy6o",
  "key35": "4MdASQE85WgW9tJ8kxqwkDFY7mRAqJwrqmLyCMvcKZbYwjqMEjcsW7oQmLRhJ7tw81G4E8BruFtARM54jpxdg9oB",
  "key36": "THFpXq6dgZNW368ADYawHTxqei574hJsndnSoQ2xF92e4Z8Qxnr91qASQbE6cCqp4KgQSuWBERgHrFcYPX3mqHi",
  "key37": "5bssa9faqXx83kb3NvkD3rzwLRyNViNuYd8NwJBKmgpw2rjUrm1oxi4GJX6yRejru1hJC9o3ZvTJVKE4jm5jhEiw",
  "key38": "27aM61EFZ47XcAyK1ZWZXLLoLHB8bcgzSbmUuFtrrPHCbT6J9F6uZViFr6knTaxaMYfVAGXg8H6PfuJX1yTd9Aym",
  "key39": "85rQe7SU2BHnE1pBFh7nsQuoT2QCdNzPfhhPBj3WToAY444Vf3dkW1jE81eVLS7KQBN1wwea5vcxVmbRrAdKboB"
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
