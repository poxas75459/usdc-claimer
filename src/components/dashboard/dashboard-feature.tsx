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
    "SsJn9T9h3XV7VCkJvBnEAynChS5sEWnuMzFPUzfxk9Cd8NRei1pDviF6chc3ZU4mytcGj9W3VQXeSPJugam45Wm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HNQo1SEScoMJrkv5h2tq4KYyNxVduYoViaAevF8SR1Z7pPgxMX8mX2SxiGZaTJCKSJBSwdWDevgdaEZQRykuocj",
  "key1": "46UGKyD8maCW1MGb1jBg3wD3v6J8esE9hqymZK3QYyhYLsncW1JmhLKaZL9y6eLMkwWm1UEPRjCmVKV1bqaM687Z",
  "key2": "3a3bsKNRP1KvuGLSWnXqiWD12SCYdnLCbnV6cMVmVx9HptmRCpwPgM7NFATpSMvwraYE3LCi5VSnLR7s9N3eWnRS",
  "key3": "BUFySFLZ2eJwQRCayF2GwGyKKLc7aMG9XorTPasVpyXu5y38LMgXgVowLAbLpP5FSMg3GbZLz1aYM328KQ87tZX",
  "key4": "3H6MdimiiTDWYpsDKatunyVfX5B8T5Zce4BuBMcEVQNSLHw7giRzF1skvCmu3xPBgTbDDpHnCu6HizfVU7B21FvY",
  "key5": "UuEWRanogewoa7VUt2Q95yVbwHoSf3ZxfsCqF5BeEEF6MndsJGPLPnwW8mudbYK1cSSBaiYmoW8LpNQCqs7w8rx",
  "key6": "3C3WKmKQHpngJETgTtNRXKXgMkfenAfZ6taJ75rmpA8PjMRMCQdE811rYd7HTxHw2iHvttvtptGwhNC6UYrkGRYJ",
  "key7": "378EiaZbRhVT3n9eytZhR14Z228Yk1He27mQgyBcnpTyDKvPVYTWrZRi7f22EgXyue45yvXpi14HKMCezHiUH1u4",
  "key8": "2g2iVSUSqs7jFQSkR47BzuX4GY2chYTBgCyHdSNhT12Sa1ANNicrg4z8tARqGL3ETdQXk8M7JirekSkkxy52vKTi",
  "key9": "2EzhteunkyiffouGpASh88bb3kzHEsEtFbeBjGkR4ND99Q9pDoYpLfqHQ7NyJYnM7V93VWw4pm2aga7eLFGmmfXi",
  "key10": "5v4fzmLDHun9LoSxatHE9dCYCTVFg8TSYoNdp8Cmv6Ls82BHfbRe1nXDDtWG8DKD9vjfvGwkt8VMMJ4jZLuiWD7T",
  "key11": "RA8BYTk8jYhwq2z1jYe3ek6ukREUbn4SAP5ngb13mQgboYzd81xaXcKdcKjZgWHpgFprpfjf5nRBtor2k2LCTdG",
  "key12": "4mjiCMszZ87RwpRRgUcS81nAjSgf2gUxC4FcKinkgUykDiS32GsugYeygkHt7tqVxVsKnUcshLcZGrAcHpr2iVzz",
  "key13": "5UR4ne3uvMgtorUUWpd6RTmpCGCYvq6DVQJmA4FhEjzQ1J4KSHBSmQZpsKymJTu3BV1FK7U5yjHYSxxZWzccr7iA",
  "key14": "5naebNRdwPeqDGnTX6o68RFQUKYBZXogHP5tTMA9tjxjJxB4WABGASRFRoKcB1znhumianN9KFxDkfd68RpHpYbP",
  "key15": "29TF7hVRs7ojEkbLeA1o364xmZWuCwbXwR1kyE4JU8Hws9pqk7wx1DSDEipQ6vTgsxmJDiLE7nHHVEGUGaCVbWCd",
  "key16": "22ZCoYjSUPtMsAMbdMiNmTnDguNxyTXno42wJqdnmXDY7QVThGV3eNx9bukbGbWsRkBtLPgWr7U6exdmU6KNQ71u",
  "key17": "2MrExbJewS6yjjagHFbimocpwS8XkSCYBgmsHbsN2p9tJYqByEuGcvvEdozMGLRUgm38BQcEAxtNqnCgJfX6J9Mr",
  "key18": "3pUU1JJnxwAnzSt8qjRMSCeUkRg8YsuX1dG9XPB3Zi6uQVRqGiBWhsdiNGZXau1TTXkQ6ouxWtVeVtJHUR8vTgbv",
  "key19": "5UoHrsqTzssRaMYkEnKrEWkdwKqkjJA4A5ziUTpsRnVfvTxAqbhhPNx4jbcLeZMpAM52gpMYDXfugheegL426Zti",
  "key20": "4A6FWXLfws9Ba9cVLPfuYchzGZVFuJSD1TGxtB735T8tsXWybR4W4SPybWJaVF5Wzt1TSF5ED8UbVe6H9JugNhGz",
  "key21": "5Qx7C8WS9d1j8LQpiWg2oj8gRoam53Tuabx7AAnDonvemuFFaRBtGGfbiXzkB79V8io2GjwAynE3jzTaUdMpkruj",
  "key22": "4Aoqt1PhaGMWyJtgcwVhrSsuWzgLxK9yYrShrV9s9CHEgNvw5XnfyArKANFrpzoX4DaizJH2zTcVWm1ngeQTvkR7",
  "key23": "5JoBN6JcnR4spfkdi7d1BLKuV8b63ghLfLtyyM5TPe83DRHaSGRUdbuvHgCP4fqwZgUaKEWB2oMpLUawmCSGvEtG",
  "key24": "2Q9MpFS4fsF18wqK6jc9PCeqnarRxXDwsTtze1v5HQqa9he2MyaUiR4JP47EWrBdooHYGQzGafowLFSqyFHxFZQv",
  "key25": "4SxhFe5vc7rps8sJRT6aAriZCzdaKkkjwXhM8p8jJExVoRSYfdPYJQakSfvHV33eKSQXDFVQt76Y9BJwq2zDVwoX",
  "key26": "4x2zYWUkNGTG4bXYR8ZXGhnLzfyFfce6L9rJhiFvBg7uvMCBMofd2LybYyqX54qfnLFZ29SSDYazhJjemZWS4kL2",
  "key27": "44hABmWNFAgvknkgBrUohkyN2vUZVjkn1VxUfCikgq4ZRueWGYciz941U79UicRVJ9twF9xjpau42S2EU6VrqfP8",
  "key28": "466R32XjbmBHG3vmoNdd3Qe5sxtyDHgsCC9byHY2rmtq34vZ8ibtDP4LRCDaj4WwJg3UcLDvfZsMyBKH5F4pMetB",
  "key29": "2MMxV5jjwTBNyvyhdZk8GfDdEZjjf3KTV5Qjb9crmpJAe3pxihM2mLQdUnCEUvUNXV2L3jFdwg66siVE6GXcU8MT",
  "key30": "5Rurg7sPQEJYH3m1BAYWd6E1dBGLzGyeJs6kTjPxKCyFiMw6ZW5r13Ef5vLZPAnSopSkUcYbPMzSAomYcuFz4EW9",
  "key31": "5sTiVLxAfNnytF3PBhnJayPaNLy3YH6rtPM81kYtwHCzx5GjxkdnG7pLHgXqiCaw74aJB86ZyCEYVCDrLbTsUtzy",
  "key32": "5fkhBiRsmN4SB5p1ePmsH5TBVRBadNGurBm8D3EJVPmcp7CgC4Fb2qeUcsnx9vP3J1GsRATD4UHi4zstHkUKNTJi",
  "key33": "648dyTtmbse9ZmCeN2CnGT7d53L6CBBj7vzDy8Y2CsTibAwyFEUttspvLsrAeBRwnf4VafQ3wg9nVtSQiXmbwp93",
  "key34": "3qLu7BNPrZggboVM3BT7M8cBt6cNxnpoREM4mG1arJK71QFw3RmooH2MFhv7UsWzqzgjutpd2bBPrYsNmq8rBbPV",
  "key35": "UtfbJ5LYUobiDxuPbuZRTxWx7HWzZvtpcsp3PjC3f2316HYyphwQEfWoFbs3MeWZMVsL8bsTjNCVu2KGVyXaKp5",
  "key36": "4Avx4hBNbWKtdE5VqSzmfFx4sRKU8epi3r32LMALMsWesqt3p1PqDjY6dbbK8Amb5Tts2HCNRmD63cs37ffcivYK",
  "key37": "5LGHXUwEx61PfmZh55ZteHhxMWBPvMn1QH8qUy7vGp2mpnqwtVz9s33Q7KvM5N2AGVdexCGJXDpSxoKStx9rbntG",
  "key38": "3qWhnWQPFBx3gZF13z577g1x1p7j9AFjs9JPSMdSh8wwdSmSCocnWqB6fMKsMH4Wo3vsTq2uHE9ZwqsELx8kZfea",
  "key39": "2dgGuFehCMniHUHAnZPQmYMpxjaQwHBWEVMqY92Ph8G17cAV6g6q3BBQvnFsRKt6upG6CUZWVVwuUucf3KBFEsmn",
  "key40": "5QpB1KLt2Lshi41WwWmQwUjc3ZK4jCB23ZVowqjtRbXXRP6SirrbotVZwofZ1xKFoRnFp2grerf4meifjMC9feXF",
  "key41": "5GqtVKTGox8hndE6H8g96DmzAxoLpyL5LyDbNxATEtc8AXWaFAW2Tp6nHexdWcgnehsM79sNP2YuX9dGLrAdNrNq",
  "key42": "42NMbY1ZudvErwsnNnyKHhUBeiAuaLojxJbtXtjSdJpNJsvG99Q1YNNKTpxvMWm9iaoeaeGUDvfctkUBvunFx1VU",
  "key43": "srw6Sq2RzKbHwqVd9n9RCEMgBWf8WmMYmjM2rBTVvVWUTF5FXbCdcR3q4vDHHdJaBPUp54YjrWZu3WxxSMginhr",
  "key44": "5Wxz3e5SFf9GSvYWSC3J6ARAWRaeSB2uZnnKJyYMaqtqeL5W3Lkhy16puAcavwUwfExJ35VxSnhUJ1Nix9SRfCnY"
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
