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
    "28PtxhJvwaAFrS1E6P5BcdMmVhe7c5sqcRPpHJyk6HXSo5o44dfNZhXUPNDhDaLQY2sxh3zzvAbrkHwTRFEeteaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hZLhob5n6unMLdsdCyuYqUz6RTzKcWybARb9MUsqvLnZxGFJcXEwCrqwCSgkxRhewwQvnVCGGDWasWirhjCnxwA",
  "key1": "5MgeQjVpM9hZgK5vsqvtEQHRuqiMoVBtaNPZkep8SmDBLHMpM1KH35F9DDGrGejA7cqbaUCLLYdMCkMtqL7kvkN2",
  "key2": "5k6bDNGaxGRVpgrMSJ9fkSXMRfC7ekBfs3cBy3cMDphsMwdbxuK6JQ8vguNvVqhJCTPCavNkd3rLVvr3wMXAN3HB",
  "key3": "2ntjoUiL9RQHcbteUSvHaQf9kAwUGZhWb86W6hrTrnNqAMWAt9ax9tHDKMWYFpLsH126RWACM8UaTim6F7smfYnN",
  "key4": "3vKYE5vTNMX1YNtSUjbvVKLYapiNn9VwERFvkL443ALH9oEMnEvPoHDvxWN5zVbmXNV2E1y1JRdZvPSxeVarhBxt",
  "key5": "28H2agLEQPQbzTTnR1YXXwBc7KiHX9vWi13n6EcmMErkKQbFnypDfmbFgZiAh5ENcyFuqaAWz5DDPcRyY6McyjhY",
  "key6": "T5NjfNrsDSoMx4W3RSmmmEq4gfe8RgPsPtkFFWse288PMGa8f1TWwN65HQTgPeTJ3mrAT7JUChAkchkUDcoCcYQ",
  "key7": "5EjFG4MBfTMiC8LCFBd9Tny8kYQG6Guu9aRLAkqhyDzCy3aK4TAYjKQXm9mtesLrcCtkkMADWXJ4kKDd8FtwXUc6",
  "key8": "2CyQKbnVTSatTPtZNEusEuEgpni4aHuFqgArr6ktAjaioncR5R82VY6rTN9581gonFiTFUprzowSCbixCSPsd9Br",
  "key9": "4a9yNN6nKTkfPKTn6vRbvh46drYUjeAubRdhKkcBCg47uyg2JKxidbkGMHhYN1ELQVAcAtJ8th4yWYUtX4RuMwCE",
  "key10": "5F3pQvkcKYZ2yutP6q84bTF4heT5qqbT5fSBGXHW9Wez2ToK4wx5FqxxFpik1sHaqm23W8psT8hrR2QJHvWkR4Sz",
  "key11": "343u9JqEMpTDv1hZYVRqRyc4DwChotZ2xUH1DaQ9VFs2gCgZ4camRivJA74SXh3XQTyZ92tmbxacm7174XRMWMyw",
  "key12": "5X5pgKTkEGugxbQKLHCnHG1EkXpudPoDjHcbkAvCc4Koy2FstycKR1h38GKAMvbYBVVAYv8obr5NtcEsRepb2bxr",
  "key13": "2mC2T1MsuPdYs4H6QeucV2wS9LmsaS9xWD8BCo4deenFV2o9n7hcmnPwbt2TyZxLoqvGgpjtMfhqhTeZCDBLvb9L",
  "key14": "3bM5QK6Wf3LJkAZ5ntuZBqJdWhSKkeMtFgZ9ErMuUQf7zZv2qbLxygyu84dSonXYgdSRJDaQHFS9j2Zxy1zYM8Pf",
  "key15": "3mtRujDMwuaqSipSfovRo4dfDv6fNX2x6GmYnKGPVuJK8BT4wY1PcgMNKnokGDKEbhuAG1rn2Ss73NKHdSq29vVN",
  "key16": "3qiG9MjdojxTycv2PsJ8StJnR1n18U2aBJymVu5uhYWKF3aQoaRm97Ywq65ReRQCWh5u3EY9vbBRGGM3KGbou3AY",
  "key17": "4AQp1sELRo93ozgHmM95f1qZ2d4eh5bn6WgAyDrod2rQ28iLii9G3wURjfRgBR2GDoio5SLbgXo3qKLMgFgJcbLe",
  "key18": "4cGSXzH7CpPseQWra68RwxtrxH4JY1nB1bG42qMABVgAPegckFcsPCRxn1JTiC8bt9mcc6F62eCB4pBq7HKywjWK",
  "key19": "2wep1VR8XVCzJ46FQeySizVpUfuqiUHBJuohMviSq84KAffzYzvysWtF4dyDUawPBscbGWZLniM9b7PZU7Hmwo5a",
  "key20": "3QsuN9A4p1QPeb5VcU7dE3RZYHVSuKHccEq9yciRMhoT2T7BjYB94xEXNvgQoz2LMUq6sueyTZfmzT9k6caixMex",
  "key21": "28T37vCsjXPW1yRYNbCg6E8e53wG1PRUDqtffbDxNm2tEy8W8mHu7wxN94mvdeCMJkeV7zMKi1P8zEdCf9tgLUgi",
  "key22": "2Q1ooK9XzxdCMVRSiUpSdNgpeEtnYrj7w2KjR2dodNLE96LyNEDu7q2jGNd2wkRd5PbubinNAViDTqtF28K8HCqC",
  "key23": "5vTcFs14NdsRKuSPqm4KJrsqzZMHHkobS5UPAiWiSk7y4byF8odBn18kHFibdu8dVdxqh8yi7j8hdF69qVS1qb13",
  "key24": "4SgYqPaCKSHWMfWh4PGdVeacFZjVrttGK5SAHTJMEXvnnTaLifRaVLHn65FXRJNMxkM1r9UiZcY3kjXCv2vAY9Hp",
  "key25": "5s51LsPB3JjUSxH2Q5WWFLNZfmiuMp7ZsnziWbCRNoY147J4xiNvAnKciR8GTsp7i8rBytFrBMUFyhciENUffGVj",
  "key26": "5DgvDPFHyAmBCwc6HoNKgx5ZYineodtTyQALruUTsEBi2Q3vYv4BRc57j9aZYyfhEBTp5qEBAL9UJ7uFJ68PRphX",
  "key27": "YueVFvb4dvzy7NqSdf9pdHY8yDBeSsr42eFXSveZn86nnbcydefhMRdDkeejgptdV84TWinvxh17JuxLGZRPu7W",
  "key28": "2Zr6Sjy2NPavMXCQ9JdqNWtkmSeoYYVZAcoAcFZsVdJWp5K87TzYwKLohR3cLwoccYg6HRYk8ExJYnt2TmtsAC7f",
  "key29": "4TaDunhQMycAmvWWdfqgkYwgJmxoYkZHYsULZA1K4ocYmm8Jh78yX69NFkZ1e9cbsqSx1Wxdnm3sHwc5EXTPYu4P",
  "key30": "2xrkZVjWeF4YY2v4CvUeRifn7VujW4L4mXyLDPSVdXfNFqPxigy8TuFzzkFtWhwHs1FHr4aK1WjJNn6aiG16HWap",
  "key31": "4bv9Q4xBhppp6YTUr3wKvwkUQv3vwAs3a1nU66UwUGS1VPo86wD2mubhjK7drEGvUZPFWfJwQnoBGbKQA3TWmqjg",
  "key32": "PK8FUPTEATy2Sa5FqjbZ5Z2Ax2sb8qaSQ7DicXF18sRVF7igtQZtJnD4fz41PxGd2MUYxfMFfYtFU3UWdt7jGwq",
  "key33": "4hTDKVh1LMnEYXXxpdmNwHXTXmkPo1Mz2cySTDJ6jKUf3gx3TSAiA5v1Y9wur8SADmZCvE2sy1vNs8K5tsiK5Gdh",
  "key34": "36JLGzwLyigzCFjBfoFBKVwnAa6oNRQTHFJrU2xb9oWBYDD1t8rqvtLDtYGQdxhArNG2fdS936n9bAAL6D3pa68Y",
  "key35": "3MyoYbQdNeJxJmVbjoThrmQwTbAV3B8wRw9YRRV28a954AmhGNdVBFD6MVZGrJvWp77MV17K6CM2igqmDRS9sWEE",
  "key36": "2PwpEXMPom6mYETT7oHZRjbL8zGi6Po96E3wpwNfvmU6LoDJxfS4wrzT8Mk2fVqPmKtj8aNc9irDD3McWte9Amvb",
  "key37": "22bSXxEj2gKa4Se5bKSNeb7AdcXQbMKj6ZHcY1UmYUC9EHdJivBbnXizxGacGfD2dRyVP7tFTLUiGfRCJGBqffgW",
  "key38": "36yVXRyNek7gs9cnmYQnw2iNEMnzdcYKssHNgcArv4KttvsFBWf4UEacKVKC1MAHzTwPPJmtBuYSbSNqUbffQsQq",
  "key39": "55UHS9vANdpmQCKnCYwUpVLu8E6LJNVfoNcNwJgdBLg9P5MXfrs5igHP3qx12GXDCK41vEzReseyEEFZZaomJxtS",
  "key40": "sbwAu5yVFhudg7cQPNr7Cp594kwTQ7pY1B5EuBBK7PvR8N4kRyj6UijVjpLbWSmTgxr1S6Rq4jzAiaBNWAZ422J",
  "key41": "44LC483vv7iYu4QaYRN1GJXyE3MAM2kyLvu9GJcFsCJ5rpjqX4Bx2dKFHKX86a3NHDYhAPCYPjqUL7av5Pwf17sy",
  "key42": "2j5WiSqJiPmg8ix6RuRQ4iyGSoL1dNMUabpmj99rv55ZUXt7cM8A4EQvq3pz3ErDfZTWQ7Qky8U9k5cyfTKDejrC",
  "key43": "23QKTvMshMjB1tRa3hAxZ1eXM29ZZRXiGakgbYsFiXCRRmvHrgV6mh7rVG2eU9GJn2uwhfXuTP1ntQLESuX8Cucj",
  "key44": "5PshzMqvUFRhKmfo4iHAJQuVcTYFDmxk2Z5T7FuvQmfpPDCruUrPeFQCYGUDw6d1d6XiY814gaeAuef6rZxwPp5f",
  "key45": "259yVRow2Dc1NDiS6mtbCnm2vQFyLyT2cJxGqHRVqMFTVWS8G2s49WxoBWaoeuczXzbVWParbBNBd6hxpQ2vRHtD",
  "key46": "59onVt5uAyBWzwK8mwzeT76eQ7CVBaTrygEvQi69EXAyPRusggsEcEMt9DLnbfQueMACttcEgBJSigKx4U1opZfR",
  "key47": "4bL2C51WNrgtS6sTHEKiTo2Pumb4x941coZvbMYA2UaiwWJD4bVZcnfomN7jLeYHqU2Py8gLH5J5TefRCjduMoEV",
  "key48": "4Q2AYQFvz3tPgmBFVKUUvakym95Uhqaq8vYHZ3K5e54CdLAJ2ySwWJwN16FquWBg7uuH3wUeMogomRVK9NsQz6Dx",
  "key49": "5yrvTGkmdEdKwy3q9XzvQ2bacfv4NzyAPrM5v494sQ4YfGXRWFzjVYYHuA4TCfSuSXasKkpTt2QTRx7wZ7ijJ7gm"
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
