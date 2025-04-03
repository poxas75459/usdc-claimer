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
    "5Ukjt4gptrtzXy3BXRtYQhhq6Yeh9ek21iL2sPj6LWau2DMitdjvN2dPqpoyjmcWpbyHrJUkxEnPW78Rfwoh2vtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Am4j4wgQq26AKJd76Fu1h6MutWWb5XC6h7PFMMdVmQhXuEe67P336SFPHbBt4a98Wx7wyyeo6AYSTHrgZkU3vs9",
  "key1": "4twiCv2sj3EKY9xpXpC9LnU2GnaHvUpYALCKbD9BV2UGsp2DPy8pWwiNZajyAuJSi1ber2AwBTBpbLq2FjDMNez9",
  "key2": "2ZfzWL7EnBLDfXNoxR1o4b8c2EMj1kSfzY5TwJPWWCdgBtvV1RpbCPCEi2onfwypE1xzd1CQyyBVG6Fn5ZfaTFyX",
  "key3": "3QDnP5r1DjKPwm7gdp8QUPBuXTtPV4jKk5CjLMsmhhD843N1eCqFY9k2V1wir8kR1KgYw25HkLsmxb7aMt3pZgox",
  "key4": "4pKLnZky98ZsjXQviSTHhfcrAjZ82pMQeZngWXQCMp2BmfJqG4QBD6oy57X8ZustJyRciWtLKKDQq3W3fL1b4tRn",
  "key5": "3EL8BghtJdWG9xDhyPctkJR45HbeRZZJojRuyKAyk2WytknBsuzyN9zkE4Es8Dno29c9U7yL4ngRNsK5WzPgoag8",
  "key6": "3hPrbDEEPAsvdW1yC4xdGT6zz3KAryX6bj6mGw34oJjAXzuhCPUgk94tJX4DyakBQZ7hZ1Ttq7vkPvaHnHs3B1Aa",
  "key7": "21J4NRJhZ93YVXHJ6GuQHkQVutFFF2kc8coeH19qxPZye7GLKeG2gb9vH7yD9fg1BN9Vak8EDctZasHingko2Qho",
  "key8": "55urMryAYUZyM9msG4NU1xqFFW1DEbv23gdzScxbweeGQnJNNiYis4RLW6No4jvEVhdTGcz33Q3K75WC45mVoGju",
  "key9": "2HYwTm71ABgkjiiKRJFvnm3ae9g1hqf6KhD9AQ6MeAHq2q9DWSkKr93hPaAfR5GTo7quFhb5jQh9MjzkjkXn7dxH",
  "key10": "4p6f4nAP9NwpojvMQmHDbymoDXrndGnWeiDpN1ZQFjvE796wbpfbfQTKmyTQKrt5oTM6vboYZAQREJXKWYZBSCLq",
  "key11": "281qoN53hjz2JKmUeoPwtYgeDhqhF5e4QNCcAxWpj3EmoeKQLHu7tztL757pJzTqCFTZNVGz3vrXzfxLi35CfZsV",
  "key12": "5Smvd1CXU8GuTGLn7MsZF8ps1e7SxLVTknA3xz2ixmZBQTNTDnLzzr97AjmzWVwwq88WSD3TgAxAnGdSAsdJqC9U",
  "key13": "4vS3m3t7tQ9RNXNaiHeLdrDandNm4SwAbexTaapkpS6KSqP88pfuuysqKVakBQhtEf4H1REUCNb9p48L8nrM7jKS",
  "key14": "DC9AAjs3TNmQkgwSVmupFgU5f7eToRC3PkYaBZ5iVz1PUGZbcy7jWZcsWR1oJNtCRovNSvhqm251mA888vxCzVr",
  "key15": "56JQryGqtbPoYcsbjHQHw2aBXCBxRxAtNfnqFTSLugGEWx23ZGbcqvhGf8M6yb4eWWB5ZX5fMeh5XA2HMH7SwqJM",
  "key16": "EhYnqfgvKGNmCVdXcEEokDHTNrWDVwC66zwhCnwroBTrjsUKLtj6QGPoxkF33Aj9poCvuoqTXT1KDbMY6oiVngw",
  "key17": "4vDL1nmNXXhcCXNQkUfCPAegcgzvcpsJTuU6RWgRu8h1VVwya8LSmyQdYWZ7cGfdzgcDKbBR8XRjyeiJtn8wx9ZD",
  "key18": "3KK3kgN5kbRRPA8UfVqPYtJ2yaRyzKojHXanN1B2VA5xQqRM1G8ZukreNgoBk4FhNPNi1SPpRUDfWrjCKLBDkFyQ",
  "key19": "4c2A2egzidCqh3Npw9oPiPfsdPdvcjLD84d5eNiRxTre4HGzZPP56jB654e4BF3fdSufunY9TCd8zRhEBcto2unK",
  "key20": "64ww7diwxPMJmZLYjhnkMqzt1bTER69vt3u2JHE2gv75uN3Eiv27c2GwLmCAu76esvVepYCd49YAVxu1geCpi5WK",
  "key21": "5zinibsBD7aNymJB8SXm3o2vi7k8SZVi5pHQELbX7MuR89nRZ3XiU68xsbgwUYmeUYyioXnTFaJijmrnva5EnfK1",
  "key22": "4futuBzeoaJqNaS6yUJV9BNnnUpXSnjt1invEZ5hdbSx8ZVrjphJa8NWL4be2pzzEPXSHFr9rH8dXN3PXD3CKJZQ",
  "key23": "4YorUZh2rF3d6bFJY4bdB6e8ho8hm87jMe2VU5Cu4oe47Y2zmfBH2KCEe5xLu25u9bXwD2cyRvaVLNuFpz5M7t6R",
  "key24": "2WtCiYzEVpTRZNcaeYfxTQ4cRJUyLdF9Wo2fqi1k1pPVku5SaofM7TuoBzHwc6Wa49WvBFXYTka9vwijdxpHWVsh",
  "key25": "3nf7cdq6LmrWgrgWMKoJZU5hxCNmZY31NFwtuabQtrBe8QbnicCn1NcDwNqrLSj3M88VqvDThJ8bwMfqrZQqbkZs",
  "key26": "GUpuFGXi4FhFHY3SGt3DFqh1sasRHT57Bw9bw5jecXBva3rXYv3hDgGTh7n7RzfYG1HB7VVWfWhYGKYNB72hdwo",
  "key27": "NjwxcM8pfePCY2mvV56Ax555pJgGKNMCKd77nayfvtNiC3GfkQPvX1pE2tC4kFw2ZDiofcovroQarriGZABpnwu",
  "key28": "5eMnBUNQAPCNTQEpt4fnow5sNkWWUBp583tBxutYADGCd6yKU9xhrkrcASVnWUACrwTVbxxhhXh1YVN5sDoqKx1x",
  "key29": "Gz3yUb1MdGXejUZnHPV3rmhVraQhe1ktEgmbdCE41xsj8L1jPSDanzP3MCB9mxNAa5y2Jiyj6ZpKnsjiAmycDj2",
  "key30": "5thw8LoCcARozs9auMR5jzR9GzfSRHvo14ukPbZYyV9D5rhgmgDWLhsJKJ9KREiL2DmdB1dVzRCtZG4uT96Hi4gB",
  "key31": "NM6sUXUzcJmcwGV4T7CVP94EijQDtfEP4GWyjHGsptXGMTWdH7w7dASBhBXytbYXQcfstT5FSak2HrRb2NKm76F",
  "key32": "hWkWv2fCUiqCE2d3a1q2DCeh9Tbh4AYeMoGTDMdYH7bWYvSXwiXF7JtsJJhWiyzzMgd6sPHnd1Wzt9twuUmXCc8",
  "key33": "2XC3NjtDHhSDeseJP3DjiA9sLstSGeRn56CtCarkKPnou9Y5mpgbj5rQ3xQxgygG2FvqemaTsxyLsLamBUtxTW4c",
  "key34": "4nmDvPggmAgzsKbSaDdyAJGc8yMqexnycogvDWWapLaLLCzU5fSM6dSiZifFEDn84G5qKzZXEGPhK8XPnRXpvTcR"
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
