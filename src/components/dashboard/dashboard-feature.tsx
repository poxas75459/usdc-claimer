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
    "44YbCfNcMipEVmMwySHGPVLf4j4noP3d2JR4838Kdpva5A1YKa7z64WwxLrsF1JhPone9h8Px3TWEia7qApSWNhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jaHyhkLpXiEHWr9xVUzBXozjpMkgKfLCis8bSgockK3bMJs7LHAqFNjJQ5DcUTrvNgsx9owCbMGf8vy5dXx48gP",
  "key1": "4VUvaKQrnntiBEqriT84cyn9Ya9ikp3SFe35xtn2jYEaz6RVBVFw88YJVzdPQJxrsHCegPDrC1tZjuwBQL23Mvry",
  "key2": "5BdGqkcgWub6grQDtDRDioiqYnWQv1Sik7fDbYbbTmAAyfCrTFbCYapekhozRWdtv1gccTAjdanAdB5XYn6dfFHC",
  "key3": "3SKSfCetQxLhUKEPmHz2vagWh6egxzkuVaGN95C9iQTicNpSZr2EyKH1rDz8cgyyuV8KMigDA1QDny3p36JT89t7",
  "key4": "2iULWrrDhZnGoS6r4F8rmZBw6VENQg4K8RiL43wbfj9BUv6MJH6cfXLZNtQFVnvuFeC9HDbL8Kts3ZVaDjwforwA",
  "key5": "2apT1nrRdUboq5ms74aGZYSXh9q3FFm38EcNyusU7cM1ugyUiUQjnsDKngKDnC9RL734J153nmcoCdG5Du8dKMxb",
  "key6": "4TP5QrKiscowVgnvwxdW2hHNztUbyKuxFqWqvM4VD2D9kc3TXgFVJjRLXf7GpjQ4g7LLdSaQm3HhKXxYjZWBJbyP",
  "key7": "2y3LALYaU4C95Q1AFpzYP2L9LBSh61ZY2S9vCPUv5dtauCS74fGiNTHaHnKKnNuRk86wmfbdS9FtoveiFpRz2o1f",
  "key8": "54PWNhp5qPkZBeMHe9UsuaDU3pVLLQ8QRqtyrHswG6bgA5pmBzq4S1ngY4V2B5PP1U37rYTZYXvPmcMZCi2gobY6",
  "key9": "4YKHuMoYDXqTTarmcbp6EXrgGwu6wtMdw9XbNGYfhq2J5NEA6x3zmfpgXhF6zuLr52GB6WubX7BH5Kku334oJmpL",
  "key10": "3RAuXNKQYogEUEWU2dYjdY7WCvVEYWAfZHyWgq7tPciskh2AniyA84AdFL4zYphPhJTeufAJ3u94wT1aqM5swp1G",
  "key11": "4PCer9FwPDak5E1KhXUBfLgXCJiMCC66epQP8jqCPC9rznVzGQucyUgE6ghp5GVaUYHgDA2kxwq7LUxJ2VCt5xuW",
  "key12": "3Ts319qpo3z4pMNb9GRbwMZ8F81mTDvErzUqGM6VBkF1NbkcMhGsTKbs4Rbqf5HMT7RoQmxtA3fxf653SATki5Ha",
  "key13": "3QntXfRLQpfns5G76Z4wUFhHFcvBTFYkRjn1spEd9hWsw6SoBrxZMvFu2ZUQfRJ8fjRYxQztdsK5VhiNSoAfDQuw",
  "key14": "4wxYR9beAG3KuPJ2BmLSUaZtJ3nhM6AR7ARHBbmF3HnX3VKHtYrouoS6P6iaDgvW7suDALGPtJQ9htbAVmJ9QMmF",
  "key15": "3QPYQeiXPjWzP7fx29Fxx9hZdoJJLrSoSYMD1HEkgTB5d2QWd6btM3TRKjW9vSTQregHLxk5NWXBqFFZnv2Y2z7e",
  "key16": "VwXbN635dXVUbpf1qXQHbLCwn75qG9teoxr6E1nkSwmj3Em7SqNWqmDKago7Mvf8MHya8wFJY6dQdNf3a64gk9U",
  "key17": "3sXyrfsxmY8SXyNhibr7HG4Bd4bhJ5NuqJM4N5BLMt75ufk3gVPZZ9AZrNF4swWmcR7b9s2A2z9K1GVG2x97WFJX",
  "key18": "4kBHZvQbEpz3eP5tjsggemjfdnAfbHFe28iJ21xXNqdLXm5qshnntmQJsPNZrYTwYmG559aNdR6UJgFLJcKRKjLW",
  "key19": "2L7nnmNEXtQwxUiyGBHfai573Gtj5kxW5TexCtckWYKYgMc89aiJ3eAM8TWqy3jQFeK9wRLkSo3sdKsiieD1pVSQ",
  "key20": "3JxL4A2fzwLVXmombDZGkoLfG5PBeHKKg9fxXcGWmbUmdurasE3w2vFWjWRiAsS3vgBqbEfVqLj6v46XbmL1ioe8",
  "key21": "3RpPsKW97D7JU3vYcT4qFHudZ7fT2rHqRTzSQDQdNN833DxHDk84myMb627yCYMRcfBqdDU4QDdymgdBZ7tcC5Mv",
  "key22": "5NcE5hUMazAHA4a76Poq1diPaP6wQVS9SfYZdQidRJNP2rP7nvinKaBWHcXPbyJFw4dqP9PLCDYYcEeWuYvKPGJP",
  "key23": "sGJnxR5NBeWRStb9AEhZTjJfSyTnVydTssuqnpnD9YEh2zdrxjc8z1pzSXT5xnb5bxw8tSKUxc6uczEcmJdVitN",
  "key24": "5bdpFvGqh4GFCv1Lt5kdJiNo6nGhFQfX1WtBxEGdaor5FNLkGnog3GuLMBnYekZagzzQXrDuuAS7Yx6rBUrP7ouZ",
  "key25": "3YDVdmXEs9iBSp58fXMWwwZHh5EijCn6VB6xRGL9bqdfZFJKA3EP3TCke2ZwVC91Tqk3jHQSVHdQ4RjF2ijPTCDf",
  "key26": "3B9bksMjCKbRnXqYbqUsBFfQp714ZAeCja4ihoewKRkimA9WRtBcf24GfGHozEU1RJZ9v4B8U74GXo6HjENvVsVz",
  "key27": "4Aaijb5sJSaDF4icHwwa8oUbC8iLgdQ8cY7nSbcxgNKcHreWqpg8owHva9V3DhZwa6KwKXC7cWHdKi3Tu5UzstdU",
  "key28": "2BUyjHbhtp9bCnD9HndN6mdnei2M9LJ3LscRjWUxJig4pXvMMPL14k122eJRc93LhPP9XarvTguxaWp7ToNcyLqt",
  "key29": "5KkDVnpJnvRKpH4EA2kPkD3jsvVhtPz124Yg1aiRa11Ao7jzwK2HCy7sN8LCxhLiKWYuotC4i1jWMPT8KikMz5zA",
  "key30": "5d5w4efYRW1ww62q2gNWwXjqUwxmBmRDVz2yTsSkKLGnudLyTpYCR1BiGVNH3YMPiEoVoyZCbopBTxXgD4r6y2cW",
  "key31": "4PbEF6mJFUKuFqRbgNPKqGD1FuF8DrSw27qLFJH37XDjYq3wTy9shheV7BbmT9QYRcKQZ49AyC39f86eu6a6LVyo",
  "key32": "3ezAbqDUFv3ShQYa3navAFKDeGCsNafSiCrK9xN9xVMX4CtNjset9kVujghPKEYTJ3bS7AU1A2X3sdU6T1k5g6Ju",
  "key33": "2St5FUzBEqFs54MgYqrdu97r3Q573SzjV7S9wzYH9o2xeavp2QKbxHpd6tNEveo9mYaPT1TbU2jy9rTvmzJBXuQt",
  "key34": "4WDgikNdivZ1GPf4AFFEG7VZ96ZHQBwFtg517f5PvE2YJqzdk32kKHoMiUKXAxxYnvBsuKDXf7HdcEHbntonuzXT",
  "key35": "614xkfTMr1zQSYhnfZTj9zHbt5BzanU9WPNrHvZPBh39JyZgeUhQoc4AQEKAno8tjPAPgApBV8tb3TExtoPrX6Wo",
  "key36": "4aAXvKL26YFL1xvwikoJhUHAhUGA3dsBABpGLNQ6WCfzuAS1sX82idpJkkcPHBHpRKWzDk5orD5XNw9wKe6xcRB3",
  "key37": "4Fou7dLnovDe9EuNKJKYX77EeHh46uqpzWfGaTjNW1cYvVabdWXv4rP6VtvvMkgpXGK3FhTW3HACwr4ag2UwbWTD",
  "key38": "4osGfEhDXb36qK4sYfBFd362SQ24Fo646Qg5dndvsoJjjpsuayj43cpXZJgLMRCuYYarSTykQwyQP9zXNX4om87E",
  "key39": "5Si6HMrHH3amZizpNsxuPMDm8YyWW5tWqYeddMPpHLk1Q4ujPwywcU1pZrefL42tLL9mCimqiLDZ2Q97K9oHtTCa",
  "key40": "3QWuUVYW4rUnfe366ch6UKvfsVjQnYN1kGoFppK5AMzpSjnCXPSDAegTq4s9DYGremANLKSdX9EBc9UF1MYBifdw",
  "key41": "LdLdTNzkerWkQwN8fmMXCvf1eg2RhWoWZhS4NAeZhDTgNvpWx4zzHuQpDh8QjJzrPJa82SVFVTBuotK8bZ3gcYz",
  "key42": "FiY3APoyXo2d5GP8eVykm21jjMJyNBs41qXx4FCTSa7du92u2cvBHeEfqUjRdQJDbRETZbJfsLDJ4RxkLZLkGU1",
  "key43": "4feeW48hrfHiw995bXBeB41ikZabVFEEgokDi7aUiRaWy3QKFjFgxygSKAhgeLaYfZWmibXNuZYqrHia8NqcjQXL"
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
