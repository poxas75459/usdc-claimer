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
    "5nXpAxmCDM9eDCTJNMmSGgGE8XeCS7DK9gHnayP2cQZwiRQp7P8c4prutQx7oGNAFNMjYE8PUi8wgUUwU8RG6v3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RVfu7VjUxmXYEgsYzWweEVMZu2rGx2Nm5dzsEKLzjJ8GhrtipheUSpyAP12Yvb9kWJ7TCDHTn66X6uRsvUUnHrK",
  "key1": "bFVdLGuX8AEtKTbdCaPBMFdWcUEV1DZEYSq4Qfj8wrSt2u2NghqmPuPE4Urf3p7RVNjBN4yJGhWBK6zbGwvsDfv",
  "key2": "3pt3Lf9GUdcbVmU7K4wVuoHv2apufD89WV3vFVjjvnQaSaNRpT83J5ySxvKMRvdrJe3hTXi4urrBPYaVG5neZFUt",
  "key3": "VSn2BTcifsYzWChcVQR843R9Tp5tcdjKGacDPmo5sfHCRRcYhPXgCxc7abmRxyBBqUP2PSC2ETKxnNRV9qfFJij",
  "key4": "5HWVLJYJv9i4uD4sqLzh6eGMLpu8GeVw6nCp6TpSB3V8oxybznbsdoRjMjKKvcj9yE8JY54Uu2Nua49aR41oeH2p",
  "key5": "hQ5w8TC6aNWVfkBxQASFWprpe2dAPMGBMzQT4HFRD7ivKFgAwuXQkGK92yedRMhjq2XKTEHUQt2kEXGGXQuibeZ",
  "key6": "3cQxe5fQjXUkfyZDag8F2XdZysmAYCUomV9Q6CEi49uybcY9f7PrJYaVkwHDqumbkpRFVoQQuYGXP7DTKhx9VCRz",
  "key7": "5ykBtQZotcdnCPdaZBxViY1KkQbiL95mBVe5qD3oRYCZ2Cq4SsYKfJ1Fuxj15iUZzfAzimzx2hQAFc1d3M7PmP1a",
  "key8": "2iQQYsEfR81VjYTegJ2eKuqNQBkeGrKEphfhwEjH3yLSKuPeXpwnKBzgLZocQXmkh8mZy6qfECnPs4c7FaCJcGSj",
  "key9": "aVezetEY8yPBtmFLo3R6YYPFRqiv59mHzuhaMWDnCM1our636qqoSadpG7GgRDkBjf2sKAuFdoAV4sGWk7PN62M",
  "key10": "51VMvDYY4fjGRVosQJanM4k2p5aiSrfFGoFnZi4PcPgD1XxUJVqntFouPtyio2C2ehmpkx8YGAsPh43yuCu4WUFR",
  "key11": "3pmwdRy2HkhMD9oiqRJGaEwogmhucnU8fEjNavgsewweGbiBfFRopmYZ5BBdg8SbRVfhGmUr8GgwjRxzWiej6Y42",
  "key12": "29XAqF1ZbKRzD4Zc36RXa1FmSprMhzbt6JN6ybxxxGGE17RzoXuUyhifHSpyAUGsxLoNS5d2VyLZ32Fp6QkXhs7Y",
  "key13": "5NdYukvtKkj1MbSk7gP9JYSmKqGaSCNP5aqnySL7tzLwwZwBtD2gSxYKNJsfPb1L2JCBeVXaBNvkHXRKBgJGrGyj",
  "key14": "5P6NYGs4vKZDFsET54Zusy2GfnSLM5McBSN8R4nRZ99pCUWhzEj1FxQMoPiNkGFGHAcAT5FeG9btYv7gKVo7MQno",
  "key15": "C4mrb6RqXcNQvp5EwD2Xp8S1rPHTH2SVYPdQ3Gap58QXVLUuFMSQ1FVr9Ny4FVScWGoEb4JpyYoRcjhnaEbBfSH",
  "key16": "4FnvoKgNvn7gRBj9RTFn2bo6ryRfRrdRCdoZWzLuvdawKJvjZEyieeyDd4SUYrghz6FoeKyopYPcQDPzSEKjQnHB",
  "key17": "2eXExD3f3dWEnkZWh6SRGpog7kU39J5pWCbVKzMx1MoDYu4NwdBqWHfkcTqkUAAKgpwSqm7ugBamRY5EkWNDy9bG",
  "key18": "axKjBsaG9EjfasW9MQwUYtJNnfvA5tuf81pUzGNbRsDe4GbLvQBR9duvXd5PJcAJhhTiHSqfaXZgRaqH49DSP4p",
  "key19": "5fQf4416u7m8MCR4QJ5fB36DTmmV93b7vxFHGMpisDaRM4Cqn4tAAgwsf1hcW6Nvmh4guK2WrYnKaSYDGjFapJZM",
  "key20": "nRh8FcbKTUMqhakde5VyXzGwwUwExFVdLEsQhgxYHfb3353oWuUHkSoAspe1h5DoTG81Zvr3khKvTQccaYAvZfy",
  "key21": "3AxcFWpsdFMowTAqLEJw5i46kwuPhi99SXp2mnjngCFJagfbjsy9sFAfwkYYgPxU8TcoX3hi9LS5bZhb2r7VkxpM",
  "key22": "4YAGQveRid6EQeisjgJEMJaVDtqLunrwgyRyGgtm7RCz3bLjJqPfDn1JYmvZxsGvCJbazkPhmDhLDhv2zdLe1JQu",
  "key23": "JH57xHG2SZhbucTu5Z4yzf7zaAd2xTdWRDi5PKaR2AgFuvGHKq1HdHaR2Hvg3btDJZrTxVSWzFQJCmhhyPWDrB3",
  "key24": "4scBpLrso8pacdUGmMbUPjBTfDJ7oj5HzqZfxQereP2mRaYQz5wV7ZghQukU8VFamEwVUpBp6yAqMM9Fjt3P8cei",
  "key25": "3ifSCAMaa8ypBdehnVdCkBx2TqbDCt4gxQfMoEumn18dwe45xvJxv9Vrj6Wrc7fjWXMjm4aVgDc121b3t21PtVPw",
  "key26": "5VnXhbKLqdnhbZqMaN4ZB5gCj9pn2N5AZNcWcgmkc8W8KTY86Cu5MhKjpYWHC8fhYL7ENyKLES6LRN2aDW7Gijz",
  "key27": "3VTH4gXAsgaa12pisLLq35J3DBJBzv4kafSoyBy3F94yHxecELgYkWcPZDY2WkraXrzCnPVmtLVc4icPs2EpuACM",
  "key28": "5XByJsqJcQT6qPhuNLpgW7RhrEsRse2jRed7XzBTG1vjLjduFkMmXeauYDfamkWhXj57gviV4KwCXJwWiGs3QbEg",
  "key29": "usfPU6aC92cxi5A4m18tRzPmbxw3XpAexWAYbny5PFKPPQpB26aYQE68deZvAsyPMYoeD2bxevZwA35NPFJUvkE"
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
