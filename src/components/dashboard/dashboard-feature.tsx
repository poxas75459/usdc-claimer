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
    "5DvD9aQY4k4VthhARJMJwFk6Cpt4UqYbp49HM7J37YvNFKY2zPsB3zJ3Gbf9bZ1AR6v2YcyZ3QbSeE2Te6h3gmMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E2M6ZnUAT6W3d1LwXe6FgCDxNVt95Z79iTX3LAKCoMWtjwKu4D6BFPtZs6iFJe2bjVNULDyu6vJtReg766eM8V3",
  "key1": "6YkUJ351sKUjn4CCC2EEpBokAwKLHqXPXvejAk3PVjJgZffDwsT5Vp1fvG9rrDKJYbuLBksL5TKovD5aEmvZVaH",
  "key2": "5BxfsQYmNoQi6XJKPdYzhrN1dn6xj5a1F73tCdyqvYvcQFKsbYCgmpqUQwtYRfhnCGTgS44qWBbHoGsHenQCKcUA",
  "key3": "2EaEJtTbNnMEhUzJMAvFDh6B8KHNRkUJ7w5TdzPqWsMGKuDp1KG6edhC75cSHUcHd18rbaYGmAw7F4fDf6eM3zeE",
  "key4": "3uvFbhSP5grDXm831MbL72qQRoPSKkTsiXde1q6YgCSw3byjkQ8govnbXfCiHYUcY8JYbSFP2xupMEgQUytwUDUQ",
  "key5": "26ExgnewmePkxHsmWpPaHW2Cqu4oVkvsyEh5Xgg2d5vCBKrMknynNm4E3fon1t78Q4VQUn3Qt9qXVWW1eLaXvkyA",
  "key6": "3LmBB6kqh7u4WtmWVvW56rpBtNZ6RYLRjSm69SmUoApHBAmt4WGrgWf5SkHWEuExc1aSg5Hh2RQMZ9btVbhW7WJu",
  "key7": "3HuWzhWe79wwdKGuP8sLY5SMYopJdgpok2x2Zj8VU53ZUso8JSW8D2SWtFQhuzoNjTuMaFbw7q44A2G9NLr6NJxk",
  "key8": "sbEPPnv8SCRUtBQWjfi4KzkkiNpFH38kcKERHg6TMBgSDqFyBX51LrCYR4RP1yi3qyeXeqJCHVBMFGisEX98DgX",
  "key9": "4e9PNTC3AxcDnTEijtkeSP4q8gLbEE6gY4BtBpFWaVX7eT3iitbdBAacikc8kvoYFH6YjxAUm184CVjB9JQ4fEpE",
  "key10": "SZxENbo7Q3Mq5hBzWpwFRHzHtWYEGcn2JnJsBZq3yfjgfs8kX22WYPT78Xoas846P3B2VijWroUERxJ3GDiJegk",
  "key11": "5fibUvPzMokHB148NzbRp91W3zK1791GRWDjJBDZe426TUwgafH2EYo4hZ19eLZgetXTBtDa7YtkwmoCcaJEmDj5",
  "key12": "3VWYHyd2EGy7vAhEkiu5XY3TszpXHeHckHUqrYR8C1Ad4Jax89HQPY1XEuj5TjEPz238KFrBH7MVFGz6ZeG45WdH",
  "key13": "2JEDN6pAstHCQ1Z7vJNiEeRf9JcTS6tKBe6SYRkzVXMc7zggrtbPD3g4tV6n8XUi1C9SNwgU9HajYqM9Kq8iVDYS",
  "key14": "51dB4BtWGftskkB8Lum4hcnU9jbVvRzoAQJBrZqoVgnKJoPPf7BteJUW4i4KZCf7KikrHkLov6C1J78ARhCo2pfh",
  "key15": "5FAoL2BePvSbkqzEucBNzvwhu88z8qHNcUit8ghrHnWXmtBzrZFzLqcjfCrxggk1onQEXAoCLPixSmjig37QYLn1",
  "key16": "24DcZBph2edi6w4PcxEYmQREMbvrhnvxSbNLYr1S5diRszFLswoZvu2RdUxfNBCGuvHdzS1KMEHbQ5bewaUWJ5LS",
  "key17": "2s5Y8GTkMx8F4EHt2ZSbchsk5E7JnmSXLQDWSTWZA4r85S9aNQ8Zqmx4wn4XY2XdomddE2Cq1SFWtkQyfR6Gj3t3",
  "key18": "QspqvBnam26KgrRR8mGGi2u4vaxFZB97dF3yBZJLVMaFHeAa8GKRXk2B9zhEutnpi11DtBqnDCDkTzHPrsYupVu",
  "key19": "3ER4LQ8Jk6HgUP2ZYDgSmPW6QDqfVUqLdpMwMhMgN34bHBSseJGXGjZc4sZPNcCFqZu4BBFRhhoBp7qgwi6aCGGm",
  "key20": "96f8snDuqHZoHzZjobHvu67dQ7VgmVrKNVkxbgWmHqHkkvotR6dj57xVEEfZLKP9Nv6poKtc32cut5evDsWX8hv",
  "key21": "4bkXzMe5AMGTR1pKARBxk7fs5Xgb2oZx92iPKwUDTTYV9k1QhUpaAvo2tMQfYcwcd5AEJ67nABLfjvbvTp1RVMFn",
  "key22": "3PpnGpcea9ZobmT6CPA2No7a1mrs4MFHCqkafyrC7qsHKE6TYC6fsK8nJuKS3H8jhZ5znLwau3inqoyGhQwKmzXW",
  "key23": "2TprsZNZ3dRYD2pykxWGYiDZkopxjnicSVqLhXZhdmwhL9trj3W1Fvg7WyMSouCmJmdhdHpzpLxDCUaibXkw1rDM",
  "key24": "3DTErd5BvLLFFvnrQTHXLd4u4eSE5GH78jhxZBJZ3cjdhVK7bjT1SHu4Qq8Y53s63pkyS829SLckkHTPtxGUMyXH",
  "key25": "Btde8aJeyheWnwMJts6oRD3ijVS4YohMx3iWou2B84nKEcCPrCub9BWEtcBcN1UpDG41Abq2rLhS3wRE3aks7sW",
  "key26": "2hZ8VMHwNbwbvi9ex4gB4FTLAJr6xQrpVCtuHEDTzniv6tg4nHMbWVMLLg9RwKkk7Q65AE2Vo8JbqGu7e4xiVrcc",
  "key27": "5wcsZ589ifiXVn2oXVS1zKav57Fe4ug51pV3i1SAWGTXjC9U7H1thL8ZyuoA7J1xUiqztinQbaksYhUN3K9foEvp",
  "key28": "4ogNWH2sLex5bpgtbDSqobzUXS7MruasixAEYfRQBXqGhCCZrcf7fujYEXp7gdLyacvjFA5SHPM3JGXiJ6vfqS8y",
  "key29": "46kn175feJ1Ck2sSz8hHZgrkNHuirycwyfGD3iEZrB3wQsqCQepZyL3rjRRXfQSYijMo8J97gf7r2XLmPUN89pQZ",
  "key30": "5zs2E4wcv9eghAfruTjtHaztn2AB3V6bzM8QW8iut6PBE5eC5CQoY7idrAiPQYFPMSSHoGhbqo3tgVTGY8bLPWE5",
  "key31": "2WsJhfzyXNrhJUL4NMPUB5t4ABjJhQU228MXQLfcUtr4QstfQzdgC5jz5824h425KDDFj77dea7vzDnyAJqQtias",
  "key32": "5D4YAKELHhfsoy9SgBtXdWzCMv82okyydTyYRF7kVViHRfYafuxDoF8E65aB7ZCYK5ymXNWA9jGAcF9jzYJfqzgb",
  "key33": "43P3JiSphmLYPQtuzji3jrgcQSvoH2hRucCWYpWZ9NUsBCBdpfESNY4uLejkm67E44j6YhPa2tWWe7SDqU51Uecs",
  "key34": "gxMHjx6foDdHRHo9jyWpXVHAThV6qs46ccajjmm3YNS6gsguvKwY5jZCi8YvW74VAioimSH13fG7RjwQHxR3eUw",
  "key35": "2V8QK2xAqiLf2LKMDBRnPsKmJDLnVAziQaQFcs47T6db4A86ekFikXT6SWErix37cUVGUiLZSdHiAgVkyfGU9jxd",
  "key36": "5tjvqzkmkRHoXfEG1zGFXqw41WqviWY9n9UKvstSBe8hBe9Sq24FpcqnRhiUt2pw3gB7e8w1RvModndD3RTPJWvr",
  "key37": "2NeohiJy5BRY8h1xgXSyTBkLMGoXKcWZ7jrzv4nytmTwakG8vrGhgaV7U2Pz7sps54egF2RaMofwPsgsqoaCXq4",
  "key38": "26i4Deh4KEMtiPX9X9AnnJgAotSPvZbLpPxS1PgNsGwXPNahZqanAndxWzRDHPWGdYxNHrp1ohfHMvCtKpRRBMn3",
  "key39": "2thPQa21bTXTsb25SzjvaVDjftvRmfWho29F7Ts5oQ6bgZSTAEibrr2ey4Tbr2Gdb8LpGkoMzt1QqS76K6qpA2kg",
  "key40": "3VBZ95R38W5JxbetR3LtTjrZXmfHD3BhqTtUwFkP9LELq7w6jM3mgEFvLxi6HrZ4XQa12RWX8uKRcibnw3nS8EsM",
  "key41": "4xesDj8b34kmMNpRMYhWGf9FZs6XJF14GRMkS3x3QHaEXD3SRj1cDrE5nBK7CZDViF3m2sQyomGhW6xkTpetabfF",
  "key42": "4hvEbWxG6BmazEuDAkk4xUk9Mzn5EU7QK9dGYt9DmEuGqnQ9BMYgAmktQFL2P6KvGqp9S13PZ4GCkfGEfKVJ9oHN",
  "key43": "4N2Aq3c5CUG7YmnxbDFBYrk4DDnDRwDryayLhtpSA4kYeGxqF5hbRZfmtodTUSEcjDtnkaWML2RC9GNX9FqoeWcY",
  "key44": "2jTPT3GD6V65TFqSaJNJnogdL4NjPaGu6EvgKzygbtRcyddFHLwE4pyf9q5AGRNADYs6Qp5pEGn4XJzxMp4Ak1b6",
  "key45": "uQd3Beg7aXGVsw5YTHbzBgZiJdCL2HcZ7tgB4ZMNMSLYjtM3bTjgLQpSk6CZZb1pcQ13tXdp43s1um7gq1MxSUh"
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
