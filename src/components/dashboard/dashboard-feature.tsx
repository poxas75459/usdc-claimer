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
    "3PwnpMzuRdgyLj73AG9cvommtffiFAbxkPGWuNgftD6WrLy2SKATzjmsm8atHCxGFDsWFzi8ZhvVoYutu8hShx41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vmoNmN55XvMid3R3gkry5AWE2nw3VCz1YC2HJBD64eTZ7hE1EubvpL3ufkfkHVcRzTovud4XcnNB1BmtE3vHiMv",
  "key1": "2NxZyHRCXYgwgr5RSMKgehT6hpVHJx7qe8DGC4D8XQy36u3bDXjBBu4ggFygrZaVU2TksQtAewP6jLrYR1SyaRu1",
  "key2": "4RhYxhRy99Ync5Pz71sDLkBLP22mSX3mUphzygbdouas62iYvBfWLi7ymsk7oLDjXLxodHhkCRnovgmjDBLPRNX8",
  "key3": "3Ve25ZuCfRH1feKf3j9pcxXvqKwf4XBSajwAYZmRDPn6eYmkHYq6JFaYCKwjkDrsjuMyxGm2BQDbAD48cuNZs48f",
  "key4": "3N7NSc46Fk7hHfBTYmJS8xrXgEPV5ySJbv77d1Cg2WECi38ApdKHerSubk6yD5fdESLF7Xc5pzbUDkcNBqgSjBby",
  "key5": "2hKAuCPuAVqH3SHzVpozcV53Rn4nXJREQeHoKU2WiBMSLn2L1HHdeiHRH4oWQLNhkaspT6bRcMfLXuskghqsEmpg",
  "key6": "b9Ke8Ff3TnZd2eiCMLUrch2FHgkftcDTJgsVrnPUWQECF2v4SoZMxSebPWXbYMKEADpNxFyLb1uG6rnQCEHc9u6",
  "key7": "2LBvaYKKLx8quda5Xo7cKCGc8NFPNnAnhgGpc8KFF8DacZWoa85Y2kbskBynAFmJzdLSLpHmQgnRFVaXU29AMJM7",
  "key8": "3Mb6ChwUVxjqeGhYTNJBpBYdmKqnG1Kh2vJgA2Upzjzswmi3brGWP7ijNHBvngwamVJFpwrU4eN783sWfFHxsz28",
  "key9": "2agvvEVqivUHPWTyzyeJ8Ug7172H8ShYsUX3JGBN3XFc6E7SouC1mMvbEa39o222WaT3VLbWBgMYhcppNv7ifoWF",
  "key10": "5TSrwfgQayhPWskfRCWEG2es4xsokTUmdfmZ6GmtKSXMAoynbeoZJ9kdRcF9R6LyrGzbxiahekD9izKC1RWTkerB",
  "key11": "3CgY1FF2nyum96YXBxF7Y8iDZatTUsyM6HnrSxwhy9JV8mnQhLcjV9GzzAAyq4ZQhZfHHB27LUuq4GkxQTmbbsaw",
  "key12": "2WVvJwFQYk8jQ3XrDSGesaRcEiysxemYNedSJxmrzXZ2UFkAfJjg69fpYUjsbaWEiLLEWXjdPz6riRvYi1HFwpNX",
  "key13": "4AuGtX8mi6BT7ELSESQE4QrFppdFcV8poeZXbsUDofg8sRTGVdJKLgSUugV4Q6SADKhjRM8S3EusxoHs6Hv7vZyV",
  "key14": "2QTDcVLvQrzkkkcJDiSvSu9yr241HLsQ53bmSK1BYn322N8szPQ55ppLmnQKLQHG9f8WhBdxN7TL8Up43VMzaV18",
  "key15": "7nuAf9LCcZceNu9q4UMdC57uTZK8VVbkPQoirzufgLMVaog61Ta17v1Hp98yY4k5dVRMtTG7sbYXgUkLvTjrpZD",
  "key16": "2wD37MMUijHBLhmm3aaZ2KPftzPYagZnKju4ZZ7zsds55S4pRQvTBtBP3Qat5o1okrgjbVMAZS7yyKQTFYanb1We",
  "key17": "3Y9d4Q7SENtxL5NEs1zjhztD8TNKb3HJoYzstwXTYm8n4kGCyDL7BrbaZcGssPDLKMB9pT66KpR6hStqFUnQ8ika",
  "key18": "2M1PkUA7o4fWyTYe31eVurMYa9EycGtuCnTMT556cvfZZNc1sN2tSnChP8d825GmmXJTv66yn9YcvPPTH2VmnQ7r",
  "key19": "5RRjhHRJzvG7nWkUqAfrDi4Ldfb1n3B3y3CwG8vosSBsKQG758VywfXsBf1V58pQtbFdq2Fbb8CCDByCAjb9xe22",
  "key20": "44kTFBj3YobxQLwBcJbdBiJ8ED8nMfwkBdzyWAfCePa8jW5HbFtVw4kUJJmRRZraiKRNHutfxPrctxhQcd6tjG24",
  "key21": "2nfqe4rKM35e7jBwxsCN7PrzsF22hLVALHsh4C1iZRjPgHvhpHRdjygaESpg6eMYRMZZoAEQgSH6y6Vr2KM1vyFn",
  "key22": "4NUAkVG7CqSetiMoS8unwV8YZDtPoTkuKqkP2oShZMjJHNXrNqsbGifVGBifH33zZbhBjpPtv4Ho81NuSvUvKsYb",
  "key23": "3Y9UWke92uW7ZBVu3ZzuUJyQd3QQ9WNgYj4kVYgFXPcrX7xzjnSRmQmXv9VrE7HtKdipYarBBR3HpHiyzGXAnJCK",
  "key24": "pRmQLProLkqVsgeovsECQV6yiR66mJXVM4gwJgZ1ebvkqsVeTsTPPpuHXddGvogS6iZ6BybhNkPSRV3iTmZdUSN",
  "key25": "Faw8Mc2cbbJadJu4DLcaBjCinjWoyDuH8rer4Ey8rVF4oBasiUAuAwwkELY88pDgxWemo6WSESx9hm2Y2DLqjRh",
  "key26": "5ykE9wDWdUofJbP8LsuKpCgmRe6htsKjZRVa8mLh44fru4JXFDJReyz81nqnnFYLQETRjreVGXPcejB2kMn77Tza",
  "key27": "4DCFT6yozUq7CPH36h2x22osAAG4gvUNDVvz8R59WwQ6Bd5aPy65pUWFkd13R9sn5M1Y4vDCoermVWRzYY8EzBEk",
  "key28": "65rn1KEgcJgcUb2y6oA8Y74zNbTD9wg6WQbeozJ4GgfLyvZWY6cz1gUeCTUrZH34VtUuVSLqnvBpuxwQtr6E7YCp",
  "key29": "3eqP445hqei1W1z3MrjQJs5BhPmhfShwdADdWUXawou9RiLWBAzGXo2iwSg8RfLqzv3nGDfLD8nFZQZwyhu2aohW",
  "key30": "Q1kFchuiQMkjaBG4eAsBFvKSbiWXzXnBW1TobM1P9BjgzrSBDru9uARXH23d5g6KYawEzeTtd6rYXBUnhCqepdD",
  "key31": "3DPHu8x4n2r76NxHZaCHYEmuzvkz4Lcm9yGSinvCyoW9NndfHgquXXDSXnSsFZ69a9QsFXwYXBKXAa9htDeVe41r",
  "key32": "2az6gXgzDQj2Csx3B15A5fD2eWXjBdUxvcMHcUNjuAExHf4J6N4hgyBFdnYhrekBQjY6sRdaQBwAW9oisYPrBnYe",
  "key33": "49V7F7EAfqwktsXDxjpLH43jU9cUnohtBvTwLhUmxxybDbXANzMEf9UkspfwECCgLEne8RR6Ku1QdCE3DfxURmHH",
  "key34": "25nNTCjurcsDiQjjTs8pEmJ6hSxHiTEkjrZMZACPwDn5hLdmwtXBRLxBX1AMmHh7XU2DN95ip5RSq6R18XwH7U2L",
  "key35": "64yKHHYKQ63kM7gA3zZmm9SWKHUGuMLKKbbmdLmH9iAdshGnWC7dmrJy27Ay3zx2p7stQxZjsMuhKwMkbDPHMiUz",
  "key36": "EFXbhEMkKmZ2fvabwcwv4PhnATS85NKqxGr5rGo76UR9kGEzdSVJ3E33ZLDTTB6EDuwtrZCkBEU7A7cCcYKL3MV",
  "key37": "4kbUp9ViKqnHSX1dwmDkybPNDfz77GNBSbyfWz8a8PY1yVbqehSMoNn7YqrbSknLGhbhxhxwiHR3mvhFRNVqJwWG",
  "key38": "3U8dZL7PtJaY7eubpGhstu4jJN2XsMeLEkGyftFCeCnmrHTjgD4hKusn2YDmedzfFVx8fxPTdUdVp3bMVVYL97qg",
  "key39": "2m7KeMj6XYTRexSdMFFRypCbmK9nkz2VP1aB68MqAaqZ2LDPtNgQgXobvN3qS6WygrfVHMJorxDk6NSfAMb5RCRw",
  "key40": "9jf5ovtvhoKr8DK2MwCubRc4yDxvMpRek6LoruDKyHuHNewHGaLwbnT2m581BbXcX3ejgNDiWZmYyaQoao5kYba",
  "key41": "3KZdWLZ28eECZWz5YanRoQadGfa3U6yiDphhJBu2t11XFtfpTdmWTm9jABH9HVCYrUt6oGoEVmoLMJYLwTdFhG5U"
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
