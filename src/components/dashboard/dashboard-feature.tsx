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
    "5tJbit79KetqyeCroYsBdA93SMzCTRfaFY47sLYWFCNQXjE63EhuqEHEBvYn2zEC62k8w7WEhAWdk4WaVQB5SHqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x53j5VX9PsX9UBt4mnbUL8wXjLWAunyS9okHDSQgwkKu4gwFp2rfdRjWSrcLYj4sq9mRs7HtJGxm5m7z5qWsbbN",
  "key1": "2rwLsHXoSpuzFTCTwCLdFXoagYqLQ3w4mB2zYuZEkQ6PqtB277g3HTVGSF7A3dXfPdo8ZXQK46vBEbGLGRs4HhfC",
  "key2": "3PNwnfHYEJFECNQCNw2y1hWNxxW7Lbad95a6irGrDf4yNQC4pukMrthtWVnvQUqBjWytBmPS2pWratEdW3eZUev8",
  "key3": "4Ac6a9eqtopgoL7A3yVaNmYKqvhTGZdXQqTVTSjRwo1Xssc1BnqUeXejATKm9wp6HdLHPTLisuERADRczWxigTHm",
  "key4": "5XNgn7h7JE8PjbpCZaaz61Fwb86amHbjUrJcRCH34K5NWdwncdG4Z9gyWyt7nXka8RMNPqxZpmaYodh7cqxBjbQ5",
  "key5": "jsqrfVuXBKRshRXBQ4gZasvUcyFJQPYd5y1Lm3eEE9Sq5oUQGyMmdXfpRk2BPjfr1o27MwGaWp7YziTT75s61nq",
  "key6": "5ChMLbm5CghxmS2EHopSQ46J6qvj68RX5cRehQ4qLivmfvyx1b31KwbDo77SMjzMHpSNFHsY9pQY9SMdvRcFfSRB",
  "key7": "5T81pUYF6yWSCwGhXoMooNjfnNaEUcYFREw1hYd2FjSEpjFAYbURGPXHcaLWgU6GBkeYje1PPybx5M184axM1W8c",
  "key8": "4qiGgkxHqHDmLR8c1JhxgwCBjrypDzhdVHejJXdVEF4jwG4xoeaC7QEn1vHxKzt9kWC5waVzDVmTGYfoARJR9wvJ",
  "key9": "ya4Nfb4YLVwwm4WJSH31k9yRyCPLMe25tmEc9GF5GHnFXjywdi4Gvsr7T1jHFgJ3KuyLRJDye44i1znjYdbZ1an",
  "key10": "33pnoNE6onBKsXHkfN7RfkYExNqeqGNx6vCoF3VyGViLEmQcmtUqJwgWNuQfXJ79wYvPiuVXXnr1GY4Xde1N82z4",
  "key11": "4oSFMVDurrvw3ooSkHcd95cTrJEbNgjwmEfXTHUQCd3o2fopwYXxMBCUfZnZu2EELRTsy3hSqhLcfomgxGoThZ1P",
  "key12": "4KVD2JoQrRS4B4yC41cfoDKCh8xAHtxEyboc3w7EPEEd9ZBohZDLpax6p31DANzqSxYqDcGdeRCWZmDVvdakZFia",
  "key13": "22J9TyErAzZQy5fJBeB4sg8Wg5472r7geeS2amnGLjoxydCBJEMYUGQATL9TEnhdWDTpdNhG47H9gDH9gBtHdHL4",
  "key14": "28AfKp3VNskWGciktTFRyzPWDwRhZXw1aU9274G3vMGuHfdCxEtEoEyMWN9gFhSdLeEwqdRCEpw13T4yHsKeqfvB",
  "key15": "5jViJQpawPEkcW5pPqYXcKexf44JxkwsSuFLCtoHx4LKYVNY4iToVmqriJP9eA7FAwW3wG3i16XNcjd9iv6E2KfY",
  "key16": "5qz5hGtPAm75sPPofbnUzKN741qVmSJ4tb3BNuc42bzhPYFW2Ab7GAbP43SNyxorNYd741WJPXqDWgfgsctHigeh",
  "key17": "2G9E6MzUYnMu6fhqLgLiXqTMebWqjkvAH4YKjg6NGDHSQan735ai68ZBEjj8Jo7uQrvaQHiWnkNow1nhN2DHAAP6",
  "key18": "3otYZv4DbKo3zQ8Dj2eRB3opov8Gg5PEnD3yZWaaZGWcShNrKPKsMsJsTUvLKByNG2HHFq2PC1SUMK6WrHAHXcMM",
  "key19": "25Zvv7fHKptafDRkxDGM1NEsiPnmWREKKu1HWFpmJoowQKh7zZffeGA2ESsspYbB6fZkCadnFmDC1TF1hE75Qq39",
  "key20": "3FR4oVSeFi5eNdTYtvU7575JxncE6vjVBQ38mht87Rs2x9wJU7qNYsibAYbSQW8jmC4buDP9nYVfuL4GnTA7byfX",
  "key21": "3i4w5NSPjzMBWn3M8T3ia3b4JyZ49gPAPkUcabe3SFxEyEe2WbkKRVky8MVaVG6Dbzxtue7qpmYCMMULUvcNaBF7",
  "key22": "2qkErzSEz8BzRbhRg7KWUR7X4mfsgpo4VU9jDbTh6xY85aqVnXUSNkGZMLtfaxJKYJi3JirfHMt4ExyJAGes46Uh",
  "key23": "46H988QTpuo7F8sTsR8Qa7Z74H9eJ3wZeuNgmgn1vc9ufZhsQx59GVTR5f5FZCvTWQQCt781FjWVTu3Sxo44xwpZ",
  "key24": "4k2w8kpZMapPW3nKCrxFkyofgo8b4UixogXV4fxMJCTPXz6yPhjeuJMrkU4EuVT73tuPEjtBFxqu2PL95BZYHwbk",
  "key25": "44rV2cSDjR29D1kFKTfZrCVNJyyayq49d7DidZZxRFtQoEvnwMk5TQTCEyqPp2LaP9rc1AUc94NsHpWgZm52dM6s",
  "key26": "4fpsTgVumu7Ubf6m8717LJpKb8Q6NXLp7nVRGDTbxmoxrrGK4WhxPhyUd4i7qx1pYaopBKZtFHPjMkzqkQk6xpeH",
  "key27": "5ZynG2PSceNbdE5i3gx8zXmsrVyL7e1YKPJNAVwxZPpEAtd2dALTPqA7u5tXDmxaxBr9zb4E71feBYA9UHW9NSfr",
  "key28": "4Di5jzzjjHmVrPusiM1h61fbwRASgSVsEEjTfJVMZeHrV9oAHcQvvGfK45LuSAJptEWFjf9SUKDWLxwbfc5PR2Tm",
  "key29": "5Jjv7a9qA5V9JGjGZiQcJdDbSGHAJ6Q37ZTbUnjRz2mSzxEw6eaUnc3hnnE9c9tsVzAvscKSNYqtYYuCA9Fzwtfa",
  "key30": "5saHsnNszr2N1BmT9BZKk15BcNGkzswt6USqWEJTyebiRn2wuhDj2w3XJymgUf5KYgowitrvksFxtZx5Tk9zqFFy",
  "key31": "33C3QekXCHtCbm6DUkm77Nhsxk1Jix4YoU8cSnVjHyJY7wdAwFKczUy5bF8pqRy2s9vtn4QxPa8gXYd3bozsk5C3",
  "key32": "39e6RoqUYwfwD6cZShH9y1MorMru9vzJNHDWTqji4R5e6Xf5rSYLcQUa4C3tHKYrp6TeqntU7RyzUCCnZ37ptziU",
  "key33": "48J9YVQoun65g1qU9xbEAQwWSAkDXgRD1BWFpHFJ6Gh1ipfkPSMkHjyC32Nbug3wMhokJHNQxBUL1z2dYCvMTGKS",
  "key34": "5cdTG1YzBgHgyTrg57fDJytuxAGZZ69pg3XDb8N3LXZLQ6FQxUfgHn2WyBMH8BkcALgeyQkHDxB6KsLBm27UkdHH",
  "key35": "4PzjvvbD61BYZmsRE2hmQrEFiQRsrKksxZkc2EK9thAAztNLYYTQZ8L3hqPYcUT48DTPHwx8BSogLwNz8MNG3p62",
  "key36": "4MRqc8BvmK65r2bvWGTNdENxc1rMzrzVk3zPKorAcq9Bzke8V5vDMPYhi37wz548wmHta2sP9kazzUmiCCNEkVBw",
  "key37": "4MP6JimXgBtkKqrDa6Lo3S8WVRE6SkTKEGmEdbNc9wZpCiNiuYUVxK2AV8pgfLAD52Soq9Sd4y3WDjuQDSSZA2yX",
  "key38": "5pSECzKuyrbYAGXMsG5hwTA1pc9z44HCuj14GY8SxPC86oc4omD6tBg3g5snn9DveUehHqW8Q2jcXSh1JgVLU2Ff",
  "key39": "46Y6XSj15vj4NBoscFR5T8B1WnbH9V756YA8tyW196bHDrR4keVYhy7CMBMqdUwYezhgPw7AacG6kjCod8gyt4mS",
  "key40": "21YRt9Fkw6Hw4kzvaAvmS7ezhya5cd972azaB5m1G9NJeK9cmFHxyAPr2MqjLKM8XGSDjXGTj47iBnnAVFsV9aJX",
  "key41": "2dYERc55bQJAHnctc1FaDMMCVupubqh8aq9Uxd74TvFNzmSYGsnPEV9NVMrWJuxXsG4nsruVtk3deVqhrij8v3EF",
  "key42": "5HHuGttdvpssg8h3nxG2cahiApQTrBoPufiL9tug9YXysq2nUU8h8VfWZLCTntk1m5KgPGnbt3y7dTtQLVYL5T3Y",
  "key43": "4cCh9j8yCg517T44fYx8pkArYVbeif1xBGWPW8KwLEki6VMc69LF2A5u93MN5Y9uLDPVx4ur76Pe34rubKixzZSK"
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
