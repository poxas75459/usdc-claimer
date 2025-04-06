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
    "3C3xvS6aEvbXFoPbmHcfY4R8BRkBqJ5u5cjn6bTwqYsWmYvPNzVDSG1LJ2j6T5GnfVyPhpZ4dKkrXohNuGMPrSzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CqBMBPQsEC9f7viTwQMGgQ6D12okF4QwqPB515LWawVKKignbqkGgJ1ts6qN454R7ETdxf2RoGDopSyzTNLdkDY",
  "key1": "TQhXgETnvWVfgeEbMe6jA2g5Vcy41qauYGmX1wMGViW7cuGgezUoVX9quRm1dobXqm2a2PgR9sG3PFHkvKysHHU",
  "key2": "JeoXcES8jpF9pJZshHTYELV6vT6fn8hCnMECi5Ea1232Y1w41HxqMHLmqkgoBzPMmedjydCxh9Eisd1QeJLhqMv",
  "key3": "67XjswF1sbMuAx6kkUC8U4ycgTTTtkKe57KUGDmDu9Pcxb6HRgK838PFYa4K87BtDHMhuXGV1E4t3evPymURdtKa",
  "key4": "4RJY4FrJg5jLKs58TXdzzKxhcUM9EtqgTGCyvwuvcdeZukGiWcnpJwvrQXGYF3jD1TRx5EgDTiDppfDVxGpGpnyU",
  "key5": "468AZXWsWhcmt27L3NapZZgsFyQNRGYybxL8zjL3kPrE5HBQS5wjxqiP72qSog38byhpgtyMKtPVFBUgVzBqScH9",
  "key6": "Ht44frJvDRukuwRFj6gH5sDdGMsa5CahZP2CzkjTVtC8Bu1YuVq4sejBMAQbcciMgw3WBAc35L7HAePTv6FAoCH",
  "key7": "2RjVCAqHPZLnvxFuDxjASBw8ygEZYe9kx4HBHMwb4A5gwgfvpzsenNM56dWp7mhphbkt8sWPby4W6at6APY2pLfX",
  "key8": "5tbMWo3Aqj7g3Px7j8gja5jKhorva8Y489ZZ9J5k3j4r4dpWbicyYSWXzA6LcF8M1cu6h6tsk9uBNmSp6EPaDhTR",
  "key9": "54SLhtdQjp62QxdgSzNgWGc4iMsCP6R72M5Lt3NhJWj1mJSoj735PH6uLkNL67ZZmi77CRkNeqUr21pucjScUG4G",
  "key10": "3uceZkvJvTifpEj4CS7DHLoaYqgSauMPcHa8AFo55f5b9nb9JdyXbHZSDELVeunM81zVCDmhbWX7T8fHcCcSaWEa",
  "key11": "3UGWMqNyi4bYCrXusSkp3iqYDX5RTrbZH5yUGDegNiJKfXxuRfFhxth6KfZ3tdiGPuhTtHauRbD1y87MczyeFcdk",
  "key12": "41P5scDhz5cAz2hRra4vgJogLdvRXn8pHwFBTYYPnoHHEKLX342LbRfoNLyGXVJnSYAM8q8AsQS7tX7wWkQ1mvwQ",
  "key13": "2o4zpgFmSEAVJ2WmGSPBgPCm3yxgySUuaJoJMXKYqXUopALteSS5LPRvDsdpW22QzEsi85gP57NmuyRhfYXV951Y",
  "key14": "5Rcu1tUmGCQ3mt8A1cVAhhk5N98TLZiSHPYJVo4RFMTFhRtvN4dbMrU2v8iiCjGTnhHKy38sRJz4UWutqVFLj1PD",
  "key15": "28ikqy9GwQuZj1em12xRKUotvACqgk2MCh77N5V45MS9xwsrADkgWSuWLQSPYfxvZdF3yVixWo2XZTopeFcuBJMo",
  "key16": "2WJqdfganRbQ2B6Ho6rdNCqvoV6ehvFTQQMLAz4GnFNgR1sEy2Jxm9VUzGFkmXC6gmVreQh5LnMwrms7f3xySdwm",
  "key17": "cez73gaqHfPA1v8o4ZWvNjGtvoNn2ykvY8yBfre85RF1Hr8qusXoC6V7x1Gvr7LCUNmpwwRG2jK7MCTtab6eaev",
  "key18": "5YujSWSBEDVtuheo8nsFT4SX6YLiLVfCpp51XuWba368157r8GPsn3A58oWTqBa1xSXbwXTS4hUVVtpoxJuLs3nP",
  "key19": "3W4ysXVtW6oR97hmYCUaMPKibcuDmhpHfBESfnj2SCLkCKqwSe36zLSfkgb2X9ipKN2yCPQXMUBkvBvCxoYmh7Ce",
  "key20": "55xvg8PkW6YNZ8vLJTmS1StkQzEuzRKgzBCsFTkMYNaZcJuyii924quh6iimc2BS6sAPW79ac1ppj8Mw92TmaKT",
  "key21": "2akvHyxEznPgH1CAaYKUM9b51bmWcZPJcA9Zsu9pVCVKBBBNHksFhodHDVoUCXqpZKmYbQm49HWAHCHiwPKkvEYC",
  "key22": "62jQiU5QMRJomSesA4JC7jj3RsBDKpNxRgMKtuPrL6SSUvtDexLFGhG5Lpu4Zq1PctFQKat64UJ7fqAUhB3HLVdy",
  "key23": "2vHziCZit82W9XSF4KCcyQSBWjarpUuBj19qkrRomrxKHFHnkBPj2442Wbw7VJm8RTVzyKBubkPF3zqev6xj34J8",
  "key24": "3WMRZdNhS2pxvziBQB2iyCWMeNe1PmDS1h3CKrzn6gwAvK38StDVktENmN8a3nkxhsvAEBLWQVEFUEvVZ9qtqrTg",
  "key25": "3S9YXnYGeDmCm8HerfUfw4rVyaiZ1V9R1rE7ErHzeb9m3A3HfvUhUhbLEFKQXA5LurnCzWpfgSep8HHbPjZQpR91",
  "key26": "5nGN9NokUZWZv371xoLRA42QnnPzdqffvPfwgZXtV3xTSRKx5AwUWDsjUYP4AUtgcBiKdRsnJ6vSqc9BYAf9zriF",
  "key27": "4d7qjaMVMiPa4uNRGeEN2GAXNBdzrk8PU6byMgg9DboCRjE3jmBf8dNCJuGim2HxnUKe6UXkkiMotMzRoADotcCp",
  "key28": "YS4FSu9bav1KXCmFqr7sFwntGV3Ma1d3eogTT2ZKrGgi6Dmxc3qTo58mruXJwZjT97cvstKedmbMcn1k7o77oUW",
  "key29": "RCVn7c81YwAKCMMRDWRfKv8mM7zjbqVoEZ9rRLD6gSmHZePxw4oBWtCxsnPJhhRTDFpjzXt7JCEgDmEesDeKCWe",
  "key30": "4YLVVs1xpef4zNG4gGN7j9NoeaxvKfVKKKjMaYoh8txv1cPMK9VvxhkgshpKabn9eBQXwyHB2wpzh331PLPa4NLi",
  "key31": "2HP2FJd9F4nFgzpisLLLYkUtdSn25VqiX7A9N1GyneiJS9jLPqprJimXHKQzcycnZ1vYkfR4tAJUXQ7vrJJB2vWk",
  "key32": "zjLJiuVjJZNm68qbGYEvheGBBoFVXEnUbqranaZV66qwDF7VPcsbBhRAvfXvh3AkUyZtEgm6LzVP2vYxbR2G5et",
  "key33": "Gneg9xKVCFU1BpPh1irR6QqX4ZD1FTT2LHuzQCNTGp7ufakSVJ2jfVABxd7AyLYpGrAF66u7ZzzjNDqsefqTFYG",
  "key34": "5DvHtfy7KX9iHCW6i2DRPY16zE9isHghdegN5iNLz1CcP6A1FWzEy5Yu5QbBrKFz2W4RLVP1DwJiyLLuhKhKH3Ge",
  "key35": "3k5mwRw6KCTCRBWVB2ALYPuaPzu4QXDUYL8T9gGN4vK9HGarmgkSZKr9VXMyyrJhSaY8FxgkU1TXeqmNAMWvFX73",
  "key36": "5vLEdACx8wb8EUFt2GsvE2HSDZP8zqy9avtfNvLhGZ3pUMccgYdWNsUoxACAm9LnT9NcoFYTGvtpV2RNtFniTiAj",
  "key37": "54cpc4EyWjeLG46uqttPBBNR3CuDQxzdPf9dNavXYyBv4HEPJjirETQNs1zkNLMC8uN5syj99AjduXAqkw74jDat",
  "key38": "wPPWqRKr9uQ4AWGDkN2KUNC1ptJqH7TJjvfNLFeuVtqSSoHTyoGDysGBNKQuFsx5KGaWTA2JxruKiozPr4k1z2F",
  "key39": "3GjDP1bNxYriaKMVtS9EbLX439yy9E1jby6PWJt7cumW2sqpnoiXJ6FLgBnJEzhr8SeVD3vLTg2C2NuN1WtmLY53",
  "key40": "MZJEMdC6rSG5JmVH64xXvpgex8C7VqBwWzopQZRMeVRgDt5t5GATEJ6XHAFCkhKypWQoR8cykNGQEGtPU2nCX2U",
  "key41": "E7Pi9wk5itD7r5SaLB2k9xu4NJmewgKqq1zW7bghHjYomkyTKvsp5xsjGF54Y2RxbwVNzWAh2pKgrCWhJv3yp8G",
  "key42": "2kxB6rpSPjBCREJkLaDLwGuXoAKYSSLy68sHJQ43HXbjRHtKVKHyQ5rEvg9fzxwewJYt8iruce95AvQJ1k4hxw7W"
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
