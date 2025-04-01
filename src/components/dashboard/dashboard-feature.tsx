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
    "2S1Z3yxcAXeuM4naVXANsADHjZUEpgJrCQRPTKbGP1MkHhTa7ZcQQXMAqwRxFQKkG175DmUoP64QjqFsZMRnDmge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FHbZLNtQahdsQ2Y8UMFyhmnnNFjAhWiPP8YpN1Tqry8choBzUm4aiXLkJE2gxkMgWpkctDYifqbErWMA7zezug5",
  "key1": "5w7PTduPwAwTaVMoxLAektrmvFReUNS74FuLSU9U8VBb7NVDKamiZyU9KU9y8qUkMSW5GQ8kY8aLZbv82GJe7BX4",
  "key2": "5Cg2z6F3zvYifEF2bdxbAapmKEf7FzBCXZV71tx8ciwrF4usg3S7kCsZhX5ZnjbY66kjHkX4x7gg6UAPDq4H1bNV",
  "key3": "4Ctgjn1DovWBYqruWFMtTgrKr48fAzyoCFaWYhpjFDYT52ykyWk13KXXkVv7FSSw2t4nfEG2Uc3ppWwhsBLiHuQG",
  "key4": "4Uk4yTdwuCsCQ5t8XaLz5cw9osZxmJutQZmjXyVmm6mwz7X9cm63jhYUhXSvLJZXsiVJFJScqZVRvZ2f9MJWjA6V",
  "key5": "3U9CS3jWqwtH3CgTqMJ84TP9iTiyxFY8TeJ6wvinnqLpoaLT2B5dWtKSqk9iwSERHmVSSWHwG85qFALEHXQHZ9XW",
  "key6": "4VyFDUkfxbK6qKiHqvw4K8SeHgh2nmW8HMoNqQqZx7vGxQZH7AeSGW2VFLcRCnuKaeuqaAg9WMoH39JDHDRtbYmj",
  "key7": "zFis7HktXwEMgx3HToMFTDDQFCDsT9RpXKeQ8HN94kC4yvXsNXCELUrKp84LQptJJs7bb5gdkK4RQZ2io4aCKpG",
  "key8": "W87xCyQaUqmUsJ6uzV6VgExkPJs5yYxDcfACiNCf9MaYBnXNURMzKH4MbmbtUfZymVhEbG8pZMMjGhY7aKCgdT3",
  "key9": "27D3MJy8HnNNGBPKXyGpAsQTEU7ZPmuk3dAiD24e8gz3XTqrpkRsSNddxDUE4SpKJu8dJ8GsBtpK3Cv1kzcEuhhm",
  "key10": "X4PQy2ibXbHwXDDGkGrUEEEaz5mRgSHuC35DwrL8nmVuTPij9kvgudSbPkQTcxj2TaEqBpRB7X9CnFXZsvCNVL5",
  "key11": "55KQ6tTzNMUoujTo7KcoowTSj8Nvnr8WKfWJnukf7DdAvi8L5DJ6pEu2f67iExf5oT1dSiCT3RGsnJ6LmCrozmag",
  "key12": "2sS4Ea3hm8rUFHAwyBf6SM7DQuQvV4PWZR7hRdAvURE4Kr3StutxuD2nG4YgjGLdcrPqkzxeAsq1SaJ4hW1hcXjv",
  "key13": "45kQe26J6brY8VcaASBjwAi6rerpCxtHGF35tdinzrTRnYXdYweDcUbjg5NvFJEUf6AHhfYkaAxnLsDp6aiJhPd3",
  "key14": "21AXb4PcTYGpBp6gZjH8Cgh4rDpSrxCEPTgZSbANCYiriE872uzxiFN79rdCR9pHH5RdUPt8v483kLJL4ytnJgd8",
  "key15": "58egHKv73PUDspdoUjYaiBK8jywhUq7E4gNvG41Yf8HXXCR1jjVviv7oYNU8Gx9kb32JFZm8Y9mSixnejeWHxUCw",
  "key16": "42wiRLfM45dgajhkdTbTV45z8cw2iMarirQnPvYRwLKPvegSXAzAcu7oMx7X3LtTfZobHyWP1D8xoPqSkTZsrDn9",
  "key17": "3HLRJ2vRX9VXzSxXxNSTTLgVDzcpzvSoabw4NYBEutq3n2erwJMt3SKGkJRrRUK8xtyDk4qKChLdyFdpG3YQNeYP",
  "key18": "4QvEBsJUQXhFtRM6Gu7e4XtCULBxPCS6iL6p9wCmKvFC1rSJy6J7sGNjA9kG3R37aHTAjmNHnMzdT7Pbicj6wdwR",
  "key19": "vtQMvg8ySqWs9aZgebfDEuU2zHgt3m3ZomkD2MfJhrgrrddZzdd2U6bD4m6chsQHVFKWGsESHBywRQYJLwcVasN",
  "key20": "6W4CK3KwJDqrvN4mWctrNbEbsVgPzXqeMB259e6oB8SZnz6oy7p5XjXGkUPHzn79GHd5e8xYMPpux1mC3RCiu1R",
  "key21": "37N9H9CFo6fdNPfAKXors9mM1H9WNimAqP4Amk3hYHxRd5RwN9A4Cx27GVJjGLyaNmqLrWi9JiYEiSN1vQVe8b86",
  "key22": "4moqbFiCTCx8gQNm47KhMby831CyUP9P3pEenwDiA8DzxHTieyQqHmXWSycvDdghfDbG5VUJdGLjwfwaZiWsukRA",
  "key23": "643n9T3KdELDaMN8Aae4vcF6qBH9BDVNp34T4q7XGjAwE51Nm92jiLboV1Cxx98mi7B1JudF6vaVeX2CWAjhcPTc",
  "key24": "2HQYwbvsnp5iEMCf4tRJpMrq42VZ7kuhdVQpecgoNKPwdkQMmqk7HkjVKgifBJ6vK7jgzQyCHMZrQP7QaxnWoetm",
  "key25": "3k6ausKNGuZxEZJcPV7GMcRoZ7ok6597CvC1AWWdC63cZ6sq8zBtSmzgAA5LKFy99xatAyUuPtyBeT768DZaWfiK",
  "key26": "toXQv8ean1jcf5kN81a8LGWozemuWfrjweFR8qkJjzJ5J2PgDhPc3zRhG6iwJuXX6WyeGQ9H7tzkmdNnNC1H1Gy",
  "key27": "23LAo3dLhqoFe77XqbaBGihUsyE3dxZzgwsJtreWKidrZTCW9syHA1ePZtvDyAMPQb4CFrPKQQt2WrjwuaXrxr5h",
  "key28": "48J6ZMYYYpU4eroB3aZqMPp5o8uzr6SDuF6dGsjZggngTt8nGQPcL6bK8DGxVL3cTHfQgyLWUgyJMJQ9avrZq2US",
  "key29": "4ALhavHmGkyEr345cKkSnUjp4ws5PCJRCK86Sf41tWnaRz26PQJMXUGhNenAjGLm99tM1LHa3KVJXqEoa54ttsrf",
  "key30": "3dB4xjrcTq5ReEyESoTNqc1X3vEw2c5PPXErxVw6FVBFxnsgKDmoQMGwKNwM3riHD93fvvihEfJJKGUkAWt6wfvb",
  "key31": "21bLfmJGzsCf6TC3SVVMJWEgaVpvd28azYv2ZctXFF79fnnSNah1H8Zp5zYK3hHXUytAgxAyeA5NWE5hVB8gCarf",
  "key32": "5vtXZoT7qxkBAtDVsdNaBT1UgWrphzcyUBV1zS9JZBFEdxU1DEQxNDiHmtzAaxHYywCQjGPukNAmC9A6Ljj6Ecft",
  "key33": "bCxTEYGfnBig5roi1dcahLushBAkzZCPAc1prLDDhep9jKFFxHkSFrWudM4toBVHeDAtx97q1aFsZdoAm4VRLqP",
  "key34": "64K7bLPmA5Vz9tcomfRWqpFJmy6eCWDXGZ1SV53dWEhRVPg8bYgKR9eMJ7vw87UGZ8geob3JpqUGpLvxT3GJRdLw",
  "key35": "25X31JaxVirWVBrR4SeW9Gr7cyPnZCmE6u2WyGhF2RawQVkLCjGHm3c7gGja4GVdfmtjNtq7JTPHTX2md8vsML2D",
  "key36": "28atbMPDm41dWE5QpW4Xi1XC8xj3yr7tnCoUQFiFLKoKvPzrihERrmV2jALhjMyqQyL1gsRnNeKzGyfHCfD4MaHb",
  "key37": "3JRmmHLJhC9kDjZpiQegMFERZxNx1Yzuwv2Vgu3CEfbZNaV6izED44EbFuKyHUuKy7P1GMYGDwpswtD4MrQdaJ7P",
  "key38": "4bQ14NNCHjf64wXMsqfJd95V4dWwScee1c3PRhGSuuex1hmThbWGvB9aSRZ52QjfeEvnE1c6B4HHhYiDSNKfdQcV",
  "key39": "39KyW8LUsbsg1RmP6pmap9pK7mpmKo4raEUjtYgodxkWt7zjyJzzZa3CkZZceyXjvoyVZskUbjNpzdS5jvyefeaw",
  "key40": "2GKugDCndoGyoi1c9QrsZcjSVf1HfJsksH54HXa3s9Ro2Fp8A5whavvZ5hUC3SGZxc9FCuazpqABefFRfwM63QCo"
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
