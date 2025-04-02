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
    "4kuCrCJCyeHfR6MYasoqkDfLsfVv8xygBJGkeUGnHodnXChfsNEXnnnXwLkHHNdWFNGY6tLneBxvnxCtsuEi2Y7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21BFJhJXTsc5UxEpVzkrZXX8pAo9U6bwMn17mdnsiNgim3FgMtxfENfSxKg7Az2v8R5LRFgRvUmQc9qupgW936X5",
  "key1": "2x9TFsq3fYxmWfp5wJo7YiRLm8C9Eg52YQvPq8an47djSis3ceE4BL9xY1FYycYK9Ce76Pjep75Fj5urvMcwhPWm",
  "key2": "eGYFNYBgmgvS5rmmaxwhHtAXooFV3GNnJrXseg8TBkUraZt7fpjCgayogL5bxL9CVDFF9BRKzMdCaEgwrTjtak5",
  "key3": "4wM3v5mibgqhsPsboUyBXExdyof4aakRb56t1yWweXQGjkGRDpLs1fvjmN1Yunxky6fKsfijmRbUzZPMbPBiuSHW",
  "key4": "41PmqQRNhFg8cqJNrsqyVMB4BajkvB9jfK2Qvw6krUYttR8ao9oAzY7PPEyMhdoRrkAUhTtoXn1VmP1qYwMNhzE8",
  "key5": "57MLFpu2evCP5RH2WJXsXZ314CcRj9cx6Uh2M58V955ruzoz4esoAm72EEf3MCv6byH5wFWyW7dQTgARiyzQE7tn",
  "key6": "4rMqRRLLZUDayB843XLRyfbPVNZT5Vsf3D2CUCeYn5dJPgqfqUiJ8SouDSD2Px9BggXthYShLF4EeZLiEcybSGVa",
  "key7": "d6bjmqRcq3DB2i6Y7x59p8ozdQLR3DkmKG4giQWFyjEKZVYcfKKHN1vW1KMFCQ4heQCyYWwYnhEfKkhhfaXGbj6",
  "key8": "5gM4XsDKbjuXTyV2T21sxuRvpxdcKkLReMbpgeF6aApRwKPtTviRYW3XSWs12tBakxtyxAmxETdW1VetmUrjDosg",
  "key9": "5iFsM4RykzN43JJm5B84qGZbxouhmafNactgyC8JyWHCGz3wErJAEM8V6USZQwrcjKW16cNNApJWjcf7uuNumbgb",
  "key10": "3rQA469tc7Ps9UWkLcx4PbJVMNDvbp5Ee1qqjSMajxwxRRJ4SM1aGEvwryqeUgYbYESNdQf4URHiSbDraXCxTHeh",
  "key11": "3ata6VHPem1w6gqdDCbwX3vQy7hptTYsMHCyv2KAhucm9Hmni2pKSVNAtUWQTSjW7VdqYf1qDQBNZ1YdaqWhqaga",
  "key12": "3hLTM1KYcAyjzdfmFVasQM1vHhDseuFqgitSaF8pyDMuznmPeE4429GtRX1SFh4JdzzZV3M8NSNFjdxV1ivvou2p",
  "key13": "2jvJXQ4PzAfSZGt3VfxqzmRwnpNnwya2oeGUK1VhWTCkkQhw9p4ka78k4Vss7pPSk73Tyd763WTyqtFKNCdz4hvi",
  "key14": "44ybiRSRAHZb1ouzzGMkZf3TQDjHTW8zZYjCz3eAMNiiNqgfmMVmdg7rD7WptZyapnt8A46Cwsxzi7GtHw3FACo4",
  "key15": "56KbQsMCMZkkowCa3LNXopS9PkqXamp71SkDM9H3g445BTAu6XNJKFqXs41xEVmswJGfQMGZor7aVttFJR4VCWbd",
  "key16": "3upTW78FVyhrbqeY7mQNfBV9MFTyeCBUURSpMT4suXcWU9LeL2MTqfz5hcDAErrtpDE35fhVtvr5tosTxikS2X4g",
  "key17": "5AqDCrbzW8YTuWTijdqLghs14r1uWbCiTJadY5DjQm7z4UJ79RwbRvSJVz3VgFBr44Yht3Dmyse2wrez9cfKK2St",
  "key18": "4KxTRSXjj1buasZ2i9Qg4DqS7BF7aaPqzghumu5wviagEj3ynY6GruLgYnvcB27QNYjxqVbbzCEmeHunhRGs82UG",
  "key19": "4Msoekaj2goKScnKXgwuSuowLZ9WRGWE3SnhKsXsPBX1HqqT1yVQsDhgYU4FPmY8DdiM4o6S4kjftA83gmUZ3fLW",
  "key20": "46UKi6FieT1Up1YA9tkLdC13V5hJXeQYHYXe8mx2JzCBv9HAWMSoAxHtGDqmtJ9S5q32iKsWz262D3E8hNRpL3iC",
  "key21": "9XVVwxswJVB6EzjW1MXQtLdvUCvvJchSkdZPcnpVMf25pUnSCd4pWEo73azvnnLqUfPFoANgtk8QCXTAVTe5p4H",
  "key22": "2keL2aXFovEBYjKCAxhDPVpDFpHTifiDATPmF2TY7kmPY2vBcc6enXr3KUJc5JhEhQAZRJ1gDknmtaQRtRA6SXmV",
  "key23": "5EoJPDdvmCcHbWQegtpgoF9mKhnpx3cQenzigHdAcQYLftUvRJk7kefBDnf4qM4YApb7rAh89WcN1c9VYjMhB54w",
  "key24": "6zSgd38ufGSgLkj5EmmsKx6nR4wBh5Mq9Qg2vsbBG3YruXeLK8LYjgPrHsHcDHcJjnL8fWvhYPPMWDUW3zwWCXW",
  "key25": "8WrbqwoENPuDFfZqBhKnS6oQh4M76KfczEaHF5n4EvcgjKhVctqDLHRDfuF1rQ3k44Er2ct3t3mwukmt9NL4ww7",
  "key26": "48wky415fFnKzti3MFW2vCAR5tXkKn2MKWQpbBydRgrNpX4Z7kFcsxae4ZJmCACTs3UJ38KnQVvpYKYdxNFAR9j2",
  "key27": "ZgbQ5UDVG99RRA1EkK3FAv6mK6KdgfHsad4QHKqKTg7Z5Fe4gPkGdzxfVENAEzo4Jts3uBwu69wJ5jaV6mBRtSz",
  "key28": "3DBc8HK8DonA2LGdEvumqPCBws3G9SYD5ksHMNZAqCaokJDimGMPL1ifvYtk87SvZwvwSZ52WYvZqCoNs4N3g6RJ",
  "key29": "GQLFe2mnQhf3sqBpi54qEge3vAmfodqqeQVVEUtyT6wqoWknexAeghvD3QYnWputpyDv6LccBSxatEBgXx5xiLV",
  "key30": "2VUqtuAsxMBLgxbNdgxvyf9c6sSWRSAx7fV6xUc6xKZhVXgeYSmXwU8UpcRLe2Z1KLFAX4Z2PsJvCfS7pzADDzQp",
  "key31": "4ndLtEcFRVuRdGW2cuipMd91M9VpwqMqPGfDtVUja9e8gN5m9Z8EGke8UWehs6Wnk4wW5hx8K1xejCDo6z319q5A",
  "key32": "WhHePVkgVy5bu5HZuWZYKSycHXW2YGgXzRLXPT14XfG5oKn9Mc4e8TYZTNXbvk6Ms6Tb4nfbFPSkQueEGUbAdck",
  "key33": "4qfmkxmibdEZxjpEHsykV6Zi9mq11JGTp2go4dG6ihdJw4PYs3uwFzVumJUNVNFXec3DAQaAgY5gekfyHYH4oXfK",
  "key34": "amYLP3orPLLiejREy58PKgY2vaCtyqMhy5HnXKH3pjqUvQ9Wdr44QMW6SuEsp9vz9b9ed83bZt34zDySMST9Q2P",
  "key35": "4LfBprpZKRYvnnNEq82BiioS87cL8ejzd5BxgjuFyFAxHddeD81rhgJAuTm99L2gvz4t9oT6zkenqhUDwkoGrCeD",
  "key36": "42kzxo1QA3zLQvKNMnrhgN7qjMtiLoT97FGRvaTTDAztTBSwgceVJWjEp8zSBXzkWah6gs44BsRyNWSTAngXwWtM",
  "key37": "5XJK17ADpwmTw197geq311L32sGNxk4c6LAhDpz6ofPDnDGcn3i6zywEZtGAtJtt9TbxSLHMfqQhUbMiptmv4nJY",
  "key38": "5S46rKZxnrybqFm6ZRZXEg4ZsKBknpukjdDQeqd3QsiJeZMuCW4gVkkK4rRP91GscbYEihyZeZtvATGDa9MPrpeT",
  "key39": "4u1cNQpog3C7JrSZzUJErhNcSjyyFVS384nMb4Nn8o2GDf11yss6rUSVSe7hNcm1qb57jrPF4Mw3RYWSPMMY9gL3",
  "key40": "3CT8XP95Jny2QnK6TA6Jnn6beTkU1AkuD8Zziwcv7Sn1jFn12k8hLoGRQvnJCNWegSBAU7YhSeKFeCxt8RqUbZvF",
  "key41": "434SbTYC9rPXqWWuVnC64pRhnNjWuVdta5FTNuE3WTvDE5MdHVafb7JeZ3Pf1miPwziYHQ3hnVp3z7WKdW23CbPF",
  "key42": "3fdCydZnWQFE9aFi4BGjjn9ajzQBkhnP3PTXwLMPGKH4SGTk2yhdFY9CAGc4joodPXAoC6w2ygQ5TyG2pUvEfZiW",
  "key43": "4bYwtxv6xrkJyBxqLEe1a7azWE2B2tvpWARSU6tLknSb4CgcyvVMRed3k5yXQ77KakKoUggEhpM9ADRQLPz1nfq9",
  "key44": "3aSS3GyAGUH9Y8rdRU9oDBKyXXFbbvjHSCubiz4NvWHdb9tzgbrGUJevPzoxF6cTUJrprzrJBrjjvMSAsm8SDoMs",
  "key45": "4Xj1hJySafgpR7gXECseNxEP7JfMz1E47y2mkr5tek1xPnYBoNTDfvcZtDGxiRcgM9ieQwT8HvDJSEe7et6w92kH",
  "key46": "2nBX5QveJCUUYZBtbdY3Xb3JBMN5LcDotECKAERq54wigBTzhhZZcHPxi6rNB9VgtoHvkD25ZcR2J3sx5y2xmeHR"
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
