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
    "49t8EPL5uJRAZPnYv4DcqgPSAfNJG6fm87zH7veBG95Bvm5fBahnKgnW66NjFdUdhsK9fda9sc4otpPELR4GrJLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uBMorqAVKacYiXbE74uXTW7y5tNoA8e1yhLCiVYAzGnmVr5qLJ5hvVq3n9gkxtPKVbuY8djk9UipuT7zSKYGNxW",
  "key1": "3MFQEkcsCdK4ufjKwYm4JMaiGX7uT5zyEdPrhHcy6wFVkunuURTfzisisMAgmtrEiZNfHHEaCgUEzgSZQs7vopNQ",
  "key2": "37yctBX1CPGRn9pApcBF2kqu5ry7Xpe92RnubABmAWtGb47XAF8A9nkdphQCKmHHzH7Yon4RkFDkXKy7HEQzgNYZ",
  "key3": "2t5tga5KtdMhP4FzRw7qa1FdwVoU1Y3aXp7x1hXsD7F6wmKapWwUT8VvLhzGs8XwoS4aNsx8JWKpFfqD1s5wpqdX",
  "key4": "461ZoaFdp3UGG3FPh1zyDekv1Nd5YJou53aSmiVfoCSeFz58LP92aEPQKyYma9DE5qqh7wjX2VBWSNujwjEgcRpA",
  "key5": "gtCJxpKK4aN571fYo5X2oSt4KATiFvSs2x1BhSGMUvt1NKJShHSreAnubwtob3oJAVDPyVs7GRjgP4sSC1oY7bT",
  "key6": "3Zuvb6zG3WN1oHu4vzpvYXALiWaLnUk57V9whrrM6LBWhhiYeSVcbX5aq6DMXUtLGxGaraseq8F7yChxzn8LAucP",
  "key7": "5XimouqASj3HFzDrs7yoYAhzsNvaYksZKK4RnLZJnG8Fm8JHGbZNrVF6PiS2aNZkKT9R4gd6q6eBUPBze3zRz53t",
  "key8": "2kbV1LVLhupRrvm4WyQ9bh3rCi6H2A3RgvwFr8aGxxzxXRuufGnvNgL9hpBDRHTwEofeXLQazRMvYspCEyjjzNPy",
  "key9": "462DGk2nhYHB6kEzCvQswaeY7iQQzUktEqupeXjPYohc1vfRk13VY3sAA6SjLBhrQqSzYsKBson6MyRcNRdE6dFU",
  "key10": "9SToNGrZr9GctNX1J4Mj5j5U5GAPr9qtJ6UeRorpHoiTGxrztgbnE7ZeTRnTzKYeeM9p7ndAZDgaUP6UGotx9cP",
  "key11": "5DsRyFzNFWAKLAmxTiVBuZshiCS3rHdF8wUnSg1yntM1n99tg1kTtCsgqViCWgAmHdUuBJRecVcvdNYmFh3kACKs",
  "key12": "61MJTDgbscmJczcaePcbiQ9sg5b9gWiNW7FPBtfXmeZDwHLahtVVcLaLitc8oFP8iDE8iHhsiSmqCPG8FNMD22mL",
  "key13": "pw3ZWRzSeAT5VF6zhpG4kfvkDeF89jzB4RYtfwNELxiX69w6PUYjqZwfRddja7jhnhLdbW8jc5xKPGgHRiFd9fu",
  "key14": "3XXEp9tP1aqGWNiUHzXFFEuBfSJYehzX5tmVYGLtt2t4omF55qNx5zwcTU2gjmv2rhLwSqjRPE3eSrfuhNq7zAHB",
  "key15": "4snSqAQCgiFqCJhbXk3xB3MWAK2PKVQDkZhA4itaN1nZqSFhT1cfTUMWETT4kzZqPrRyrmmb5kbic92kLVQNo9sy",
  "key16": "2j8LJ9ePdeeiGNt4zZM7nd5ZTXJqaCWPtkoNkkHZ396yruSzoUtmcPd9GoE9fLYiitcNBGz275rmtvZZfra65gLL",
  "key17": "2Mwof1kvEXEzmyGGWutc1GH1Xg2hejHzFCfiYGhVLxHUfwTXbRSU435pR6vh7rQGSFoZ6zUnN6ggdNiBBPkxcjFz",
  "key18": "43wfJirunHGAdQGYaCkewFQHNvDrKqPFKZH6DgBhgM59KoF4wGeYLbVLfekWxcsQ8KcpMnKzbFCyohkTeSfNEarG",
  "key19": "jPXczdoKX6YDqmWbHLxeeQDJE7Vnch5jkq1uXa8aEL84pkpWCKjQVBFEMc56En49cAjSaVkEtJrzt6aTjDDtJW3",
  "key20": "2MXDPCLFe99mMuB9MyXaxUXUwMGupGBQF5q56VDwA2kdeXsQy56wPJHxatcufFcVf2CDjLYVUvf6U8W7G3gSg5W4",
  "key21": "3KvWuXtxkCHp6onN9BjnkFyusziWD2mP6kRpKbu2AXzzWVAbnnf4CHG3xomsVznv5iG9uQ2rNsg23MuLRFCetwp",
  "key22": "UqzYpAUVRTyNtakix3QfQtdNQbbvBJkxkdJoyzVS9WvPegX6fpVZdducwQ37jAc7yNSMQxazSBPtWvjmd2iQ2UR",
  "key23": "3zTPtiR9M9aUg45s6qqS3QXCeAY4egHpWhNEVZh5MgpgJNcKKhsF61fzrYUxZrjMS8qzweLdT5ADLw4Mmkk33MJD",
  "key24": "Xvj6VE6bkxfhsb8FCQGoLwwxSqrLVKaNuNeG9QDwQtawSq1K9Zdkc8BHhUMYj8BH8s865zyKqP6WEN3YC6bsPEe",
  "key25": "8EvEPJWiSVWjZkXB2PFqTbnMCRoCRpMpyNrYRDMiQWxGEE9z5cMYqUT7HWznsXYEhkwauXQzG1gCpabLHumLJh1",
  "key26": "4cEffHMBtwQwLaZKgFP72QRu7pTjUpAzB8XrGqUHyMC3aK4nZ7wNkjon4jNAYwhnbHHfQnhdqBBw16JGtsdRHx1N",
  "key27": "3mZ9zvYg6cEryUHMnK7RRw3Jb9PuPiTTmqUicRVTnRF1Es15noyJvQGFYwquaVeo3xtk4HxpEEjMYcTzpAWU53FX",
  "key28": "Gbbnmas35xwCU95AKTaVXTnV4He8xiKAahjFiMXjCTPsd49hvnC6H9veh86e8rnWAQmJUimoWALVVFKzqUHZynP",
  "key29": "1AceeyXqXjeyzfGTxYyGkdbgda3VMr8WKua8ar6aBYffKDce9r93wDYRDHXxBHRgDJ49Ety46vxoW2eUJ74EQVw",
  "key30": "3esXYZwFR5DmWysjQGoGRm9uNHjf2ho9rNPWTmyANKhts5yiep2a1x5Xx5V5VsLSd2zt4fAbj3D68ihVNfC7Hgie",
  "key31": "4qA8zb1FvmkK7AvMHnVtvMzBgbh9TWmz4vTQggpcvYvWu9tjcu7uuZZeZW6SSVkTQnfMyr8Jvtr9BBzhzWKJZbbs",
  "key32": "5UZNVg9M2PWwMrosuwfpLgWBe4sbdFKvb4fiLCHtQ6ZnJW2zWjdVifJiec8Nm2sBKf1Rb2zcDvUFHVagf3Hrpi4i",
  "key33": "4Tm6TJRFmzRUBjbvi7yEts2iTYBy35wDyYGKxTJhuue8JwEMLy2a1tBPL9gJvek4B538Waut5NtmJiBDfM9yZfKL",
  "key34": "3W1HdcawuSU45nectoNTgnV2xuophheEXyyXyBUvBkvryBLXH1c4xqvb2GrmwgvECmXcwyuUP63RJeGpdwacCSS",
  "key35": "22zKneDo6P7qv78nUifRC4mqEuUXWhGvMUkajF2ecZWZBXLc72scCjHKkSSSxA1xqjo62Hkx6YL7xBHSABDgWHfU",
  "key36": "5ubsRUbtkK3T4t8YPPY8FAvAD4FALARtt442UagFD1oePQZGngsmNgMgjWK7oWC81euddwwMP9LSuMu87kW2aKmU",
  "key37": "2PjfEMSUFHrUadsosZwtcYBQJ17TVZGS5UQxtQzj4iUpV8bBn8q3d4GEgunzkPghimHzawMYSWeb47bUST9o23oM",
  "key38": "5K2gh6s1ptnMQgriUTrBxLD4eo6CKM22TgVuq8eocB63vaMTbCwvTwh4MeRgziuU9k42vaMhy4Hz5zY3b5yhhNXG",
  "key39": "5Fz4ca7Si9MFfn4Asts75Dn5q6pLoZ2HCTXBWx77mhL4uHwUPmYy9BDHCgmx74JWVfpyxQAJghYfwPjANY4rLczN",
  "key40": "28iKe7UDACVy1X1nLRHy8qkhf5pK1iCXFWN6QhnFmgMKk3xwJg3N5fBf9iV6STo7ihyzhNETWFkNgGPV34mYHQig",
  "key41": "5JqNtyiHJo3FVRMSs1jytWEFGix77ABQzEtkucZuMEr1JTcRcKr98YdtHbg8B9y8cfYZZSCoeRwvxu4SYeGpH5CX",
  "key42": "5W1C4ajXwHxQRsfTjpGwx8GMmXDqAJCVgee3n7GZeRtBZH65336P4kJ96ENTvFfcYkzBLeJA28z888HU7HLM6APC",
  "key43": "cF7mZMGiC5xbQx8ZCQYfseGWFsMw2sRVbEfKgN4rMhGYFCSLq3RzCSkwiMsPPZMuE61uX5hFY6Zd2h6aNkAFTNs"
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
