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
    "36gEq9Fh1PYobwmWQNKL1j1sY9jb3S1uvDrA4rfU2PodDjg9T3iVwjGWQ44vtS8adeZio8mnWtKbjVSW9SFRaCCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MrZqN3qV17dPcRZ47EedDGX4tfgxWFv5boQLuusCwHogo9YqxbB1am5XnxBNp68Pkf1CrUNd6wyUxvfgCRWmdEm",
  "key1": "5PZtbcP6Lny3RWA182ChoBsS8QY6dqBm3JsQagm6tSzngQiJahUJoTtAroKPZ7b3K7DjW5SVvVosSyPraLsJuDTX",
  "key2": "2xJpPzq147pidUX5cfcGgW6EwNpHQNxCdUygvi1eAetzR86HscyosAo9fw9dPag2viQJCNfdoGMcXoZgz6j6YFFk",
  "key3": "4ZfD2JuREzq5vntibweH6oiZBYAPUGYmJ8KEP1saWkW5FqajF6f9cgepPBX31nQ7yfMbGGeNbteqc6LWWTfbjFWY",
  "key4": "PTtkvkENzPkVqoJmXcqMwM8oHNc4EG3k9cP87iTLAZtnhb5Jk1zmoWWE37d8RYp524Lvr6UVhbD7J9kTA8K2w2S",
  "key5": "4mQqm4vJ16XriQXvtHFuqonwo49qwYtHLiSdQaSvHHs8mhXWxBsFf96P6BUneh73W6UfpYuTQEa7fjdB5YfUsCBe",
  "key6": "5gbrdbjHZHXJWWnLM1TcmasXi4MhsBsxm1aV7pT1QhcSLW1RV1FjoGPpLbNcfv5gUyC6ug3iB5cNSUFrwuYSHFoL",
  "key7": "5Znfc2GfxP6wbJAkuo8fr96kpQeQZanXmhB5dCfzpN5FaRtujhi8noPaYVpKVRYrPf3MeaBQzdvZPPLoP9vfzYHB",
  "key8": "7CTjr1aDLAirCtDKrF4QKnYPo4ixAqmJACofNQhjBF23Hs3vd88BpsF4tNFpfz6fXasab94eYfBfTDeMKNFBTG7",
  "key9": "5Egm3gBBUjMjnLp3nUEDJ5KozmffBGELVnG7MAdrVfsZqfxA4FUdGS2DeeWMGqkUA9iXCM16qKqNub7m1Az76Qo4",
  "key10": "23JrdJzdbk8MEESgbAQ6Nv7ruJMRi2FvKByBWJAAowdYCNEdsgXMnyPcFXHKnUGk3TUccNLrws59Emx5UADUbpyx",
  "key11": "34xK5nwemye5v1gqq3WmcPz4FS32PLm5Z3v5w78jkD2P2Kgx5vidKMukMf6sjBVFHtENHzRWMRKVVCgFkHNKd43c",
  "key12": "4zry6sxVNxEMfHiuFxKwPopEwUz4FKJ2qaS9Y74ATkGUa2NUwkUTmH3LeyT5HbT1Rr1L8dBBpAv7WWcjd2uCCi99",
  "key13": "2pX91jqZS4MZuPPE9q2YHgZqSAzp83etGCKrEr7En1ZCNEK731mF7KMKmSCW1GwMhJifFKPvVE5JcVPPfSEf6Rzf",
  "key14": "4uqYtF8qHfmfLwnVAwo1qJPBecWXhXAYSjCtm8vixiQUz7hCRic3D2b2563CgQyMk2xHS9SuV64ZyzXsaDMBd73o",
  "key15": "5EwAZDJEypNn4Eit2gmveMi5vUofstyN6hWL8K4Mnqx8MHobCUKaCUnFDY7GBmG9cRrntS9WcipeQv6KD4n8UXY5",
  "key16": "3TKWwQen6zn3dpgwagg3hx66rVmnLMrqsvRJvVPsp7hY4MXMZ9XiX5Fij93wyaD3QmBWx1jSsm9o5Jjov9EhmVfG",
  "key17": "2hGBXXcPr8saVUUXqHMRGBCd6PEDxWzzVXS3TUgrxzBdvKd7R64Pr25CgqPphJWX5i49iQGLfzB3gVnX9zFDmXcQ",
  "key18": "474AmmoHeVNjUuTY8aijUX5VTA4AbLytMAEmLwuHy6sJftgyBjgg6ciUKEdge8XuJwKdAoPgPtduvcPRPL46fEad",
  "key19": "2nDsp278YYaX9yDosNaEWGy2PMJc1Dwfj8m8jvLVdsKqfR4P6phkd9z222d9tPqkPNXBTG9EFgneqg7JLTe3Y1qJ",
  "key20": "3iW87zMMgCrN5p7WyEfLME1NHhjsP4Fvz4RQNNUwfeEkqZeR1r7Wm5T2mmnZ2Xfyj8BRPceJPmYanVdhhH4iKLzv",
  "key21": "Gn83VPAvKooWb2HpnsifpDex9N65XcpST9E2SuMXTLk9NBfcBqrYBwZihbAPgryZRRh3xJ8TacMHmXPf7VvUxQJ",
  "key22": "XYY3YqjL5e7dSrGcQ3ScqUnbVfg78qjqm6vhWEeGdnjuY4kQNyFMkek2R6732gTk7WcdU8qqTnFaogyVLcvCFfY",
  "key23": "C3f9FFRpg3g2HMtEkW2cJ6jN7eGqpTq3QHbPXVJWBUZnrtcScA5U3bKTR1jHwY1mpYajZhQA4kYgq2EcEw7Vpkb",
  "key24": "5qcxk5VRNNFKvGh3ERiCsPenvynZVUmVWwcBKxfn29ScMj6fjGwiT3EqnC6RhjtVq2Urr3veyLD4xYXP3aFv4iKW",
  "key25": "4C91Bb987SU6jAzW34T3eYsUhZZNfneXAUuHYkfvwY4tvz8aaV8wzj7E1rjMLmVtf3ZrnzK3QX9UDJ5yzjQyP91B",
  "key26": "4W5a4YyVQ1crkUnsMF8f5qGmD5nvCTdKiU6whZqSJHCCLNJaABahxfqCHjDqeyz7FYuW3AqbskkwbEGxyDCidrzn",
  "key27": "S5FyoBaDzGnPMD8khwqLpgnLJtn4GVuVwc5hDhKxQ2CvjrkG2Jms1pzNjD7T4rekra3sgCtRhvnjpvdLumkTzUy",
  "key28": "3bgvJkUAm954NFDZqMwzEn5zXLuL2QNxUPA88qwf5fPwC5sxxXNk1iGPCyt6K6n1ECdxTnppk9V5WxvwauGnn279",
  "key29": "URDKvV73HPSL1ipeNJFDorXuhW8HNDKqp5XExr7j1s6dD5TBwqCQ5qXPHTXhpqk7hgpJR2RfgqXzNPwaTwnGtgi",
  "key30": "4McpeajD2GhVrQ7ywBaLyLbgb5uGEjYscDBvm8xFPr8H2KhHD2K4BvL9HC1dQzDxxWhH8LN4rkW65LGLJedXaFjU",
  "key31": "2pV9mEA7saJ2w4KZEJXQMG8UEREWpNrJXBBHQTV5jn37NJV8DFXauUtmcYWAdwbyrqMjotAepqcq71A7S13RUMip",
  "key32": "kZ4Rn4oCXxiaYoSdBhWR7ayMfagoz7rzdyFrGeXPNesu7Y8upp8mVh3PVyA8XBX8snCbsjdRBeJMCJLG19sYMqR",
  "key33": "4gZX3PHiCtnWSoKjMmcPB5wKVHJdKajdrq587UYuu9AhnEZSyL7konj6x65tBbHFPh1SvnLF9kqhnpPsPjBmRaSm",
  "key34": "2fmDJfzx5CBNn1LUEtsPjNiZ1gEK38iT4Vi73YFddc2MhEz93YVjnHnmM7R4GfwTeVdu7knQmgSUVXtkVHDakoid",
  "key35": "66i94Uc2uczbezP1e2cPCRSDGhiFcDLkFWQUf9kteDakBDJU1qa9ejWAPwd4JjrzQcYb28YtTmgQdNh3At3uRJn1",
  "key36": "u7ztgjNDSXTQChc3QK3YYmtwNc6xk774ewUwQuYNAB3fQFLoCbMFkojH2MoJvmrTp75xZ23AoK1G6KAhxjVo297",
  "key37": "3krqx2UMh5WsTkkdZUr6rc92j1zU4q8a78he8A4z3jS1wuEiCtDwJ5aRS4mfxYC2BrAXppZJPYZ5S52YSZNF3UFD",
  "key38": "N1XKpLGUgqvWCNmFcCBzAMeJpHDtQCWU1KrUk7GvksBadLhpq1gZQsjifTd6YYBWJoTF13cSYQhj5SRkShimnDQ",
  "key39": "Nei22bN5qFgVmi8X6q1PhDicaWzPwXFQyuZtrH2dfzfrkYGFQZWqYbnSNBEATQUt8yNycrk5tzWtNDQqj3x5pjC"
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
