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
    "4RncHwDbNTseMSVhwno3tYPe5iyGd1d3ucjNjBW9zbb7dpVY4oMBSuMfkeCeT5sav8XMrtaSjEmwYnSv9kMNPbxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xdH2vG3hUaoxBkoLczhMdhk4b8ju6F142Wad8Ttot99uQ1VxuTnaK2LhvcKHdLjB3UE9BZsGBSMJLDNSERBZ8hC",
  "key1": "4MbW2SJTLpLk6GRKv3tpNp6e1Dt3gKomWRjWctPnypy5Av8Nso7S4fGmwkJNRadpb1Y4e2jREn5ffEcTKPgrSX93",
  "key2": "3LxhcwuT3DM29Ky8fDkBKvAEowkintTYAh9NLJyXWTwFJ7VU3jxrLQ6Lkt4FZYKeJZSh4QQThWBdgas2jC6FonKY",
  "key3": "23vfS5vkfxFeYoFTjbUxLMD3nqkb54RptzNZJGTKpPcCgpX17FuynpskRPweBvcs9ZbEh2RuYLdCahupLpKnd8Bk",
  "key4": "b3ZfGb5ojGJihDqiC5z4f7ceyzX6tzR23L96XLvpxmzt8Xh5dCqC1Sh5cEmuPR9DcEXajjhvCW5EuSjuoZTdx4k",
  "key5": "tcq9544VAKek7fTYNdcJcCciTNaRtZYZe7xdALgTGdE5so213r8u1o5KepF9kg6eccmPvLSZGKnoFsvL2qrPn11",
  "key6": "68jJNGVaEYpq2HR7ajh8AVwf5U5g2G5k2GWa7AvyXVCfop3F3rFjdMZqbdeomkSF5SYH2v1K9CE7wDBmWJDX8az",
  "key7": "5bBYftwDuBVFiz25M9LeswfC1WacaAWZsd9zWDFhp9a1JsCFDyVBjv7zxtv7URoruBSc5rLSUEhL1WxeyWozPjoA",
  "key8": "3Ys4s7MxjnHoPh99ck4a81ToFdcGvqeuU3drwdv8NWk6SqxwtgG48iAw217YxStP7af3k6Ruc4uQ3DvoRLntoMUz",
  "key9": "4cqE2JnEmsSoA9ex4QPNpN569trGzzh2RHSaMocg1qdR9GDCCGr5HnG7VBKqPYdyimt4L9QwYA2Js5gTWhGQzbC1",
  "key10": "4duo7nbubLhFMKfzns1F299WC5kKsAz9HVwJ4iAwKH8jMS4W5TmuveCJwuvVrSodQQ9Z8wEL9AosCYngbrYhpMSM",
  "key11": "3skCtUvE9k6BF4Dx5X83Xjg5MNFxuBbmPTgsXuopwWHs3Zd2fQscEyCdLjRSkp3brUpx4464Zsg3o7Cv7wxjdJRD",
  "key12": "2RnseyPJvHA93XtHSS74JtTGk4A14iX8P5kCVvUJa4QfzpsLRHKP3AWuNpCzq2L2jWptMNhvgC1aMc4rrgmtf7SN",
  "key13": "4vMgGNrP5vWgMhjjpvqAaYkfYYjxfaU4kqQLwKzRuNKWFhu9E4q19shL57uMR29SRuuVKiu5vVz89kZ16qSnEy5H",
  "key14": "5D78go2ga1WPvoeyFyCNN4F2ep33jNZvCQuVqTK1BQd7j8MhzqK9TBCoksMkFZfR1RX3ZoEweApHHMWep1mEFpCe",
  "key15": "65CwUqZZXtq66tzCvxYiT2CUfJMXh9zEarotEEi33a4GTsEQUVjxJTK8onsfR6q6h5Dshu5d9Wfg8u7uvkGiWy5f",
  "key16": "3cjuqg7S1QfBwcoeAz7v1WpLuSt4QHPyiPT7nRQT5W4yzgBqqgt2rgut7bHTJ4fd61xieHU6Gxpu8hXbABqN8SDh",
  "key17": "yQhJbmDRBQZXv6NewLfhM2Dbwkq69Tj2DgY2yYkW7UAqkwveCLTSNw1FqMv8x9yYjusLPRvj3EA62ni5td4msYz",
  "key18": "4J4R46MgqEAhrzuctspWXrnQ3oE3BDP3Z1BaPu7UHxdpgUWtdMFDRRqb1HhEBHAvBZyXk4fJYpoaiAH5P3rnYoDD",
  "key19": "3qmW79pp5wuprvmaSaBycpFVLJ3wUYHHorKLb5GA8wG6WjGm8nKtYMqVMyri1A818AGRaCZtNkUBV7cTGvJsHqCm",
  "key20": "2RiykwiNPkPavXhVXPvU4DPGu2u98DkB8YNihajERwXfChjaqq9jbZFWJkMMC2zi8X58YHr1sy831dkUA6RXZqpy",
  "key21": "2BgUm6Kh8TMriELNzVWXTqr4NyB7rm8GKSFqzMx1ryZdDoB9mTj7wnPZNjmzyj4rrq5jabHawWvZuckWZs4boPwe",
  "key22": "5EDgn5HmBPiXiyGHzscstSLFo2mtUnHoJCCE3yQewt4nbfFvKgwGTCEdiRTMz4J2JLjAtpP6bdtyNwquevLmdqdd",
  "key23": "2v1aiGeopxr9Wra2pHNctTjyT5EX5UW3gvM185fPLP4e6XnpftyNgwDUMJSohs8YDtLja4jQS27oVTcDxmoqpEmP",
  "key24": "2mDmdzxMy4dDKe2kDqMnTkK6ibYe33e8u7zrRTvmJpXXLGbzeG2p1vyRj9Yw3MngyWqvz9FwJQD9NJYkmXmigJbE",
  "key25": "47BgB28RStAyiQTehDNwqwsfhB7hagBBhxRaABEB1QfZRPe74Eyy4HkRmTEXYF3kBo6zDtcRxm4vaea7pore5RpP",
  "key26": "5Bxe9GsM4Hav9EDc9uSuJADyc5amQZRjc6yD8S7Q5gRyovCWxScmwnXRZifWpwt3nh6hxGJBTMpD4YygSBmQzHzX",
  "key27": "KeiBuWCHfW6aioPBR7uRbrurDFFTf5jtQQhid4zzBKxtL9zoL8MBtWqmRQ2YvvVbP7ex7K79wdqBUq8GPUCHud5",
  "key28": "EeHENLcMt6TDHfAD9ZQ4G3czDfpdKdKudsaP6SUgrKSfuW2BCXFxY9mHK7qMBYPxvfRp98RWH5pCJcTY8yZyWYR",
  "key29": "5n9T6JbMgywPWTw3rYMRcQPvmCqhNkxuv22PiZNMAjKoFyET6BrpqgBLePGTty1wyTynKreDLEYkGg12fxZuBTmy",
  "key30": "pLcPsxGS8To6p2hSb8iLFQbGMcYgCbr3ucYsdk1ubtdcpZokkATHThBo8hmf2W6GKQLW85qjYHeP6D8odH2T8Kf",
  "key31": "5zY4ye5BNzk2UvmepVAS9bU3j1DgpZwMnp7iYjNCE1kWFXbz5YfhWSimNWMgvdC1jF9Na3QG6Eyq8xceEyi7iDro",
  "key32": "5XosSsc9bKyn6v1E42tf59dnFL47N3N7Z8QKVRM3oL6gA3EnnoVrZsYjpEWaoe6wMS7bDWn27bG9s9SuvLucbhTf",
  "key33": "46teZzZ82Unssn1mZSaqfDjmPKy771NyCnt3UPsW5wwHUKbvvnnTQWRZNmeBuUaAzSeuuPJ4xfnnyMDppw6nDuS5",
  "key34": "5Yqeh8R8q75Gd1RPc8e9M4BoWiCt6WZRYtJtp6rsYzh58NREpZfJGpAMm5e32CiESgPG57A3JYxZvhijdWGa9ekz",
  "key35": "4gf1KzCGFcrDiJC9un6oVJa3MRAiHFz1fx9y5yU1kGSwuPbyFjpDoTEDGz3Cp6NVWVeDzNozRmzHH2cKD44dGZff",
  "key36": "2B6TCgkdhxcNMKXGgWE5rMCubxRCNL2RbqHJaurR5R2qQWR6htMq5mbvpV6W3aNFZ5XaSpuSwXAVVnztQHQMSpEC",
  "key37": "59acYfH6ZwdCCiKWaphBxB4ASqMzkjcL1wd2vk3toCU68dWFxTfgSvUzk4iiEyfeTMbW5HHCMxzjLfq1twtWe7PA",
  "key38": "493UDJD1jQDbqiaSbUcvFNmr3j8KDo7V3fuJuF9U9bUBRcnFQzE6NTD9MnsEdv6yC3robTKNt5c9B6tzv9esqHMs",
  "key39": "4bitAbgcLzPQsedu9JpMvbk3aF9nA7Yksz3NuNJca4Fsy1hmkm6YxaPMZzkCUTGqdCGm6pqY7p7z6g8tWMFoA5MJ",
  "key40": "3E9UCTsj5xZkchfeR4gYJws4NoeYrtc22MR4ZzAYQvniEMwRYjGwwuhRWtkELN9BGfiJctqqGs7XMEbnnADHqi5w",
  "key41": "4yBHwmYY1rLGLZsG5jtHUVDSP3Esjo9wKpYpw26C1VVrCARdBzSNCy64NZ4acJ8CX1w5QighkSeZm8viuorpy3Re",
  "key42": "X8xKdXQufarGxQpU1vxZT8Ksk8VQ3tYcUT17gyKm4uFC286UjwpXGABPrma2stuqbLxDKGDNvk3VcXgqcPPP1J5",
  "key43": "4QY6YwoJNy5iTMXkAFDG8ZirS2AY3cmVV9rGqcmohfAjbLNvEKMDbX2xBj8fFbL2idQ5k25NybcuTtkhXSWvnuuU",
  "key44": "3D9iubsg6xz595VbiEZYZ2AuJ2KAV11FrRJSkKTYbbMYt5EYtgpEj4TDc1uRMuvDk5JC6easA6RWRozdLspJiLwi",
  "key45": "qUJpmi4xDFpUYchQfa9yCMD23bKKYgN4T13CJhN4jqGN6PJVCSc7JRff4B9V1RxkY143EAfZnsjAJgKPVG4kPKg"
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
