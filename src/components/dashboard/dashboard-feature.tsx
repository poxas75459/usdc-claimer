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
    "3ho4wrZS3qkQh5bPECVXkVAxGwR97xwQng2V2VCdw3e8K68jgrMeFAnauEgF4mC4ZHpLnMPtET8KBgGVDaZt8ek2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PL82xsVmyJGgKhUqNuMeYZ2R74gLzD9yAzDTzkrpcWDgPiSugHtpwTJsQHzUWhXa6LiUvpd9yXbLeuTfitp3QVV",
  "key1": "3dbXBVmkqmtMCcQ6AJVacMhxV1efsW7Vr9uaCUGmjTifnZXD77MasC8BeCJjKMyxYQwQkeF5sLKx2X6rGrXDVJCn",
  "key2": "1a7cZP76uiQnnmCCoDTuNHKRCjkbPWGEEkz6vxEgMrYHi3pVMob2Pa1LTjKVEWGgnDhZtU6aPkymVMeT7777DS9",
  "key3": "5rBeQCPYF5dSNytmtC5NvuyxSDmFt99v4Dq9QzMcooBWsbkCaBgGCDABWwpTe9EhNFFHoCD9PLenx4C5zBUhq7A5",
  "key4": "4pY11iDbFmzNKTErxHUzYmrY3aLef49VybAyB1cNdeWegYxiYDWqi5RmroknoRmb2Q1rdmoaSAqVhsEowX19iGYM",
  "key5": "5Cx7De8VBZib4dfXd4QPXKeLNsTqzDgdgDqYUardkK1w9LurBVw1mFBpHcixmQBt4HFDVvJas1SMfQgBg3wtNc9T",
  "key6": "MBaX1GGSduo5xGWc7yxvz4Yn79dugBic9eD4jHZ8BBWYee7QZXnsmp38nW9vvqjyTwoErrFHP7gjqtLSRqvDMAs",
  "key7": "2czUajXLNWF14o53seeVCJu993Ft3fH5Adc3qxNTEdeGjbu3tqgoEzHQfbbU3mLeryJjxfmSkw7UqpwkzjuSeiZ9",
  "key8": "56gtRgcFCFTqEJstin6QnXTc6xvZ228xFVkTCaAyrMaLXVGJQKFhzyUq6eoy2CqHwrth4D7MZteTssfXvZVKMkQ6",
  "key9": "TvdBQ6bUcNDRSPJi1HGzxy1imEAtmCUGmFpDLkat1tZm42UhZnhugzGiWr9LMmRwhP4K1QahRVVfDVTZc19rGrk",
  "key10": "4HPjn9E5G3w6QPXQ3hYfFqBuRzz4zJYrd1f14Pc2C73wem8WoJUTCasrtAnYD4dosFBr4cSJdDsboxdYnBvezwNH",
  "key11": "51PDQNeEetHfYEph87wsWeZrWrnyVS3vCoNNtsXxyDKjbpn6CfF6FRTHj7pskhSEpRE4YaYjxb8C5TYYCjY1862G",
  "key12": "2wtzWKCN9hC4VMJqLUZmwvhKEKYPW4znaqHM39npQez1Cur32stgCKPVeXKEC669dKgudRNEo1gQoiC1Ftp1gL88",
  "key13": "2pRLvNXpK3pQz5qAx7FKHeqY8FgpGzcafZhV3HBVqTwie7KCkEhSP8WYrhgzB4K4EaehKGTehw9DA4KatHUVHx4p",
  "key14": "2d79k3BCzLh4VTfdpbynKUK54NxDXChrPT7X9EZ4XF3JZUKKFGj9HbdTifgULxfKAnCVWvgpgWXScSFNNcMhH4f5",
  "key15": "mZF4zbQurWbbZXj1CYNYPWgfjJUAdSJxMYDjt5fz5KgnXhB5DENkLop2c9RY2NkuU8itWMoshosPG7jWv5JXQyQ",
  "key16": "4UWL8E74ZLvCYg8c2fJXa2Zzb13fuFi8FswUSepQyrBMCJ8dVyo7pyz1xYh3VT9fq6DT5JGdXW6RjUrL5WDYf5Wp",
  "key17": "5jyVBa2hPX94i8M6XL3sjYBXvfYRuuQ7aPF9zwSv8wpLuPSwkoJ5M1RHayXRBtn9RucsGrxE6iEmqSijWGcUkjDG",
  "key18": "4mseWK7NzYJoD1yCNesjmGFipjxBraQvuVos8AEo2ZswzRqydHQtiKKpfR35mij1oJNVr4rRUzU2GonVDeptkUM2",
  "key19": "4EQHPXH35eN5BGuQdNWMVQF3HdeLjJDic5RPp9jhG7QsQenU877ajeGz2MReeXcSM94sCw7dQfnX1uBx8Vx5g5F7",
  "key20": "4wpqfKbecYHxpMsVdauziDqAstriyU71rzgtTGnVSC2eAyRkxtvw9jB3zv1S9LoBQEHynskRa4Tnx4iyR49onGGM",
  "key21": "3mc7SG6diigxxTusrXBmE2CWUWsDLF1ra3yTn4mn7HAFcSpsKa2Gr8YTJYYuj4gJmwYvioJ7NDrrxRoyAhtcU1g4",
  "key22": "wP8TGnsKvP5UT6WPjCYMy455vnF4jvqsJ1fLsF9aWo5ypLjb8AVT6XQetxjBa2tCXx47CSrFQjnCvxBhSgT9v9s",
  "key23": "2jCGdKrrLcrYhD25CoRv4tWGtNmevzNNCZj8nfYhf6SQpzNX5zmDf81ih2eraXs8qXpNrFj4HHFgHUqEqVH3mh3c",
  "key24": "2gGY38hfaZEq5e7Y2nYLoEZqBkjGb8sAGZQgAadCSL4AUSEnwJ3LAoyDmbV6BWo7bMvVFX29gzk7N2VsyS5Mbys7",
  "key25": "5Fu5NEbBPNrHosJiWfuHDA5fx1ZTqvNwMVKw3AiXTqZeM8gzS5kFvYWi1idnRt7b6Jg9gpioLtGVzvJyyx83GpKN",
  "key26": "2LtXtbjaawEXRWJxMUBVZxTmSnE5haWhVHqTVikYnsPCwsDAkpL8bdJBtgiYWTcFXzQQQ5niJUrMorvyNWwE6KnZ",
  "key27": "4sagsLrkvQUtPmtLcsrjvoxrbEB83mjj5NttZeKcHAcMZwHLvYTBQFLSQ2nfcxKsF1M7jU3wmHT5Xy9UB7MQDBgb",
  "key28": "5wHKsiqydooRndGekuHyqeDVsHbEf8uLj7WGp5uDNaFkWu9R4WPmPKyz1u7mPjjuvyvkCwDfrU6JsJigPmP8gV6K",
  "key29": "2rSCHqkb2LFepG2SN4Da2NP352RtT2K2gy3JfTXxTNq7dDEdiJm5ZqzmppoJDgYY4ZHsrFty5zSb17pEyDcjpfxR",
  "key30": "2Zw1om8GkzDCjREdYPY87j11RQ3s53g639zJhTdGGXnGDhv2jjYTARDwcgeqgRg7PwoCTcUA51sv7N8QMzT6Yra3",
  "key31": "4o3W6E6YQRFEDuoCTsmVCrGdo53Y5m6rtZTYmy8PxyqQ2BzJR27zb9KJjF8Kb2Pa3BZfNZ81j6LceYXSjp5ioM7z",
  "key32": "23FSUZ87ikZpaYzEyu7neYNc9RQJBMKQcdGvNAgVBMVhasX6YZ7SxFh8msJd7touPwt6FqdR8KqeKfP5xavEvdqG",
  "key33": "2xrUp3KJf4nhzW8ta8FYnRXqvgNovCR2d27zRCKw7BPYDNNBEMzzgm72bixAxNvZ5iR4Um15xvwirakkcQUTdL4p",
  "key34": "5KG8reLJTsPBH4bCJdaL1ssP8oFjoqWQV2iyrxbLTWLZKtRr1Kh5AhwAip3jJFMukA4LcBfd5S5oZirtnGRPh7C",
  "key35": "v2i7ohkHptEzu4BknJs1f7u8B8cBqcBA3L9qtKsP4wbzEm1yG9o9XLzW83os99gV5mL1sX2uLWarZ6wviBQrHF8",
  "key36": "5KKg6kRoeU7iHxV1SXP3vbLNDyCG9ofydRDapFk8CjTgv8TX2RGJwvPGcc9WPyENBhQHgmzvrUGLuh1oJ9CJh93y"
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
