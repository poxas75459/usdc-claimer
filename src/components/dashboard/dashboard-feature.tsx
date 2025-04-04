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
    "4cyNm2oGX3eQz41h4e3bpPbzaaK8FmNVnoej3W7Dqpt2thMgBSZgU7CbLVxGFN6Ngke62hHNzDE4CovdBDGsWa9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tpHWY4Dkrx9J2p5X7k9UU9H3Pom1L12fVquTUMyo4GnMcwxT8gidS3Fe2rQwAHBBCvft2mfhaxEGMMTMypdCXWX",
  "key1": "3EsuweG8xuMSyXekKRa9LtVnPbKfmksWQn6YDDCXdkLKKv1KY6oEVTDqj1awu9DZiP4cr6G81GhbvqgWquqJadhN",
  "key2": "5pYMaJcA4hH1MhYmDmdBtwwF2SVnnupKreAH47mDyRzFJ6NDqiyHuMQ3mA3JQWAKNQLoYwmzQgRKksGbuKN8qGDr",
  "key3": "5Di11adKNHCdKUXNxk6KysHUQHf89r2fhAfeMMwxi8UnzZ8CwPo6aXFEwyRbif3GxnfCo8mvrSuyYE1PvWQkoNWa",
  "key4": "2eeVicMC3MRCM6JwCm1uBmsnJb8Z6txiU9Zz94GG6njqNoVEXu9NVVsDNSK3prUTpMaEWhCTHbRdpqYj9TEXEYXT",
  "key5": "5hec8Q3DaUonMDmpbU48bnW2BzTenPH21UpUHtQCxt6kXQJhd3RRsXnhd4BrBCndtx2ubSZFG2BEsnuLCtDyXvaN",
  "key6": "3Rq3TcJtHt492S4j6TgLfmomXeTAT8v4P8vyUmG5hvEQL6bQqSYhKBCYt581xUC4MvwRuH9oEoingkToAqAzvh2V",
  "key7": "66C9fBD3DXhegYYT9Fj2HQZNLLkfsiC9gzXfzg4v4AoUYzTtvpjw2w4yG8MdDM4opTbgHfUyBwoHx4qsBVqbPhms",
  "key8": "4u84ZxbUsxTsBhaH1sRQhtpW4DeF3SNNkpfn33qiYWMBuaCd6T473TdQv681pMQ2sQphExWxsRTHS1BMGReqjiZa",
  "key9": "2nP91gBSz54GWA38MM7NXanoeXJcvk2AFD4fa5M6ETMQMe2D2MnJtjpC5UCc6yDEMGU3ozavKhhLNB7hfZKUan6v",
  "key10": "5eRBrdxkc2Sdj17L9TytTX3BdxADfLgoZVXwT7FPfoJkPEftXgMCfFdqsBv93KMQvUgdXfAFTDrfEEq6c1cUBR6S",
  "key11": "pPctDLHih3JphvBujfBKoMVYZEseyGFgK5yG1apMiG6FSE4wKNaYuxkZXqwnoD8YDdJa5fivN55LqKNTEgC1L21",
  "key12": "43Xdv5yEWrihPXNuV8wEfasnuJzto3g3Vr32UJtgU3JHnNSV4w2KMwkLPCwdiPZYCy3FFK36av3xpGx6i1t45u2G",
  "key13": "g676GAZ5xJXeasJwKBUnkP11S4Q2cpHy98Ppk2XBLtSiNPKvczAn8qZhFKhgeYQr2jd7RnPyKT2p5ooEbv2Erq4",
  "key14": "3L6SZAJMtdS1wYRoRZDipoDryKaEMVmSqJP7QRJFmt2JG1sRLLBboFkdm6vxQcz55zfvSdHSorX8nKThdrtwDoHL",
  "key15": "3eAEqpbu879ycVDAwD9GHeoGMAnpEB5piRq8ZWWNWVGWQBdznA5qicEkHWnnV17eGxse6uStnokaLq5V8ceiMRTm",
  "key16": "4VDH6HXdgbFSmUwP2aASzCxysQzViu4UPZiwWkn8YXkJ92coi5eDuPJuPu6aywbykH1Uoj5TbactMywrau6M2mS8",
  "key17": "5KUBV5TXQjqp4vtxNbx8sfK7nyQUG99ccfALJNxtNwKN7wMuCqtWghUxnuWHqbzcPbsrE4uxpohqkJpC1vULecc7",
  "key18": "5WNc1zSGSjV3AU1HdUpf1qWu7H73zpa1cPHE4re5iriCnWY5yr31xZAigoNApPg4RD3NrHsqwrVXx519MkfkvFdM",
  "key19": "43ikVBWLWM2y6MDeNNQkviZBgEWuQCXPdAchT6mexJgjaYo6zPvha8QEG4PQ86pUjmufkvXipNcjpjGniDCEr3JB",
  "key20": "TxtHEf3XuSpNbjcmSBsDz3hztaJDzgrCTjCEWNLeg7oon5BxFUxHEbhSU6dwUwZsLz8F27sw2dBCFJXSuze5Ae6",
  "key21": "5Ye3c14WLsb8LVDYZKVr6G8NC2eWU2uEwkKWfxhPp8qssyeYq92NDVnyKLFbUpE56zysaVkGeFKjggfFYuT7STGR",
  "key22": "3EzYXNH2KhkKcg6MtHbVEguLz492iZyXzxtZdLppWrE1usmv68PUQsRu75iSVMVyMpyVYvaWkYvdaHfFFACc9uK",
  "key23": "2mLVKGvLcz7FmzCjUznq8gff8qHBjAzwRHwzwBC7XymCLuFh4yLrkqTgRa48DZcQbDSNxW8FWfKBc7GcgUHjqXi6",
  "key24": "4YoZ2SzDivo5WyQBmamhmkanzKqhiHLj3vvQv7fbGxTiXrdRX6h9jugvqP2K6RCn5FQzMnXfBceMNShLPDxnpqcQ",
  "key25": "5rGeLSmeCsLwSFN7cMxYaozxwiAY7LesfJCwMgintJCPnMjV4RnNaDk6eEahvSQDYZWKwXQ6TEpV17h98MEfHqjd",
  "key26": "3ERfTtBmndTcviohG5Ga91b1sNKMcX5iB8wETZe1FwgKXkTQBkiVa8DGtAfh2nU67JRaiu5R8AjFnufez2yXC9FB",
  "key27": "2obXGmufBKqkCn8CSxpW4kavEokWmESyKYjmhtx8P9pU1gE7oD5sMZ58ZTcajtve57mSGufq1PH1g6xJrzkeEG6Z",
  "key28": "2hW2JY87Fh23HBScY9RnZ9r3LSz5TS2E22uL2Fz4WJGTntitLKnbgWQt9YraPXc1Ms7ouzzTQyABEUVfRmhEafyN",
  "key29": "5gqP1VZAJwUdWbenQTbz4wJsN4s2qDoE3iFb4oFxZGMyHJWY6EMmoSp3ZJdm3HLRgE11rq3tyTioGAhptVJa91EQ",
  "key30": "4q2Ji8SbzvT1jhz3Xe8amdUnzuPkM2A4UE9KMjsNXh5qQo7KLAQxKNyRRsVSAcYwj5NAhB9SkvENYWKXqvQsqRfi",
  "key31": "654skSGSos6Apkz7ufvp812GwkcnEdf8RwZqBL6rP7xEHYt5RLCYxhhsUqqtu9CVG5vV12uQTz9sqYrtvrb8TcsM",
  "key32": "3ixwJvc5kArh4nLD7i6xhaNWjyxo4FA4pzzzpEhA8iS3kQ7n8Ge9Vg989y6Uz7P7q6jasmuTTBCF5j8gmeSmPrX2",
  "key33": "3zDT6JDzXA8dNyztU6DVfxUy4eNfgk5FiSqz78QnXquDtEqktkn9SRFFFMyu6Km5eCkn5Me5mVVKMhAAY76cYUT5",
  "key34": "LFbdJKAAyDy65yB9kbycyTdnnnJaK44eqtndb3k6UHUnts28SyxaUs9Cti7fjxTKscRFVPxA7wNJsFHsXUyAsta",
  "key35": "25LNaT2BrNRgBQ8CW6bxGtXUKawEeDMVejFrgg2ngtz83n5QifXYxkpJBvGhvUFne7bavrZdaDzcaMhpkZTsk44M",
  "key36": "2Sb8sdHnFaV67zzYHRC1mhbLSzToUx2nmoyhgQQRkBQdKCMfv9CL5sEB3LJvmS1P3s7PeW7RbTjnRM7crbsP1ans",
  "key37": "5GomrYKM6e5Mw4RUXUCtZq41BpAYeXc2kjw72AtghShbFc6fk9UxE1D4RULnanK71G57daEBDbMCPGDTJLVGEXTJ",
  "key38": "5Ge5EsjWteFsuCXypYZEbCietRczLhjGZjCMtD374AQb9SXzq4yb9a2Q8bvKPT7xgNPLe6MvyHGcBkY9FdZBEfXh",
  "key39": "5jeGvhSZtQxd7vCJoZJqk8NurvYufHudHXcmQgmpgoDbtV5o2aiuFqQy4qeWHjR93kQfGdLhv1eJyNo7uHs3gaom",
  "key40": "4QVPt7ZPoVKMu9Q1CbzywSRBexe2FwLALhMoTiH7mE2amFFm6GiSsCn18T7eGs4ve61yqCvVM5AbmsGjBQ9f39Wm",
  "key41": "2DzAsphdXrgp4k6kfNHJsicMGfAkQtmf4uVyjaNn3TfKSKohRsb4W1mZNmdXTU3zjGW3jzznBPs4zpsNb2GDQGEn",
  "key42": "4MsnvaEi2J89u1hjfK81kLybUSk1644n3T8rcq19NhTDBBu5sZDWat9Sw5t2pfT9RLyaVqge17biyJFVLzmXmMxL",
  "key43": "2oqJyuDSTzWZRdgdnXqWnqHKtMErPgJoL5BzeEcyjG29jbzpcBTCzNZ7VERXjQuUz94SDSjhT7YWAmU43SnjZ6KR",
  "key44": "5V64UhdvjohiTvySYNeVF6TEzm4GAasQRbx4drgbnTQrk17umiSDGM2ohrHW3u54fY2qxGrPsYMfm4f3oNsvfDoQ",
  "key45": "3LLxWWf4STtV8PyS1jp2sEFEPeye1w7YQTvYsVkofXNqq3RoYATheDATXQQuqiKunqMiEyD43GRyu2J7CUEmPFXa",
  "key46": "qXADP3x6Mre5YZnYWWjiNM85ViwZYMEoEn7pKpShzxCYgHrqKkHM2dtYVXYG2dyxVfbsQftGz12dj6KNaUZfCdT"
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
