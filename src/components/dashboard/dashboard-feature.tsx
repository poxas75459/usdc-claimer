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
    "4kU9wVXRL5Z7L1BWsqyEEeJNLT4aPcnFqdBhCt9AfA7P3C6r8EfaqdCUGMB1ZCpVrCHeByDgCocD4zE5UJ3QSZUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YPjjp4n4SLvVZyUVtHVsjm5KXR8RTocMAwv3pMVMe5DrSKBNkJYb5CGag6ri4EMgn9kjoZuhBwgWMvoXDaHXxJ9",
  "key1": "2mn29rYYwxxHPRK8koAeSbsKfE1xB6Q7ajh9YWWRRBUXprxJFQ8dVVQ7dpHGw36C2GNeb77K3LwBpvUCu9QFw1my",
  "key2": "3JMpxYJ9T58Wr9SjXUSwy52xhtfH4YpnDMp8CQmRoYZR6GMfRHCx1zvU7mZT4AuRdNUwrTPTun3oDNKBZ93JE8m7",
  "key3": "67P375WyYzxDdbM3AJTv1B3oD194Crws96YdrQWUL6QxgLYEV2L2SRcCDbaKNw3DdyzTHYzdhvL2B8FWErb3vHRZ",
  "key4": "5kUMeYH7cAk3hRKaMi1hh6Y2svZYhockF7FuaDZYbJNQ5ZUoDyX2vdWMGzgq8c6CT8ttrdgR6N9NtiSDUjrjeg3V",
  "key5": "65ZZZ4AuB9iKbhS9Jf7EdL6XdFdovYiLoz2EWezzYQeKXgUDF6pJEcM1ce9MisFTjmZ4qa1F1EcqWpw3w1YVTjYj",
  "key6": "3gjuyqNrpqgMCvemtNRzk1SXFsiEqgT12Jauj7mxuCf6ySYpqK4SEV4gZ3frzx8C12ZPpsuaFKQqWHAzaTCiFgQC",
  "key7": "5YgSNmZmwZdc9tCBbcCz6oNp1sngUB3micMJrvipWsjV4UKftevzWDGFBAKNXKVYbnjQPAbSdtyfHNcdaREWniR2",
  "key8": "618Mk95Q373ixKcD6DmJUrk4hjoevqoWmbAeEkszyPaHSWoF7UM3zcopXEGbRfF6NACVo4WDGPpspZeKAqvZhAkU",
  "key9": "5xDLpLF7cnMwjJk2towz9brnUSQErmcGSqmbj2rByfkzHD8GG7ogT5A2EBepo5Kb7nEWHg7RaU88YMrmovAqGKN9",
  "key10": "4sZhYcH3u43LB9EPSPRLRMqBk6zxnC6on7fTgghjrXiByVoqhZbonWL9BAU2wCX8gEe3QFmwQNQK7c6jiu3qwHp",
  "key11": "4GUx3k7WEC9zWWNrfjmUDNLN8ammYonmhCLreECybtv4JQs1Me9TbgyLLYaXnx8Wmv2SUyEmCYj2bN6bDYMYHnGA",
  "key12": "2ALsN7xZLUHpyqfaFBdMbnYK56fCft5ii2Eet1CA6pnWAQEqSMbwwKvJefqiAM7jnsyirmxVb1bFNzsJCBPtSEtA",
  "key13": "43LvmufUCQhyjcbEBrxmvrZM8F1y4c9iLrT2xRKZzsACTFf6jGUKwwhWMwGD8RofFNZMbecUfHP1ufsoNH5VunZc",
  "key14": "2sFUMo6G2tmLPM9Bx5ouRyBxr3m38sMUkFnYiXsLYR2VJRXeWedhSQiVRSN8z9K9NXcyGw7HjqSSGAB9cyJ1DGb4",
  "key15": "5LaHZ6kFgWtT4cqJATNxZsuByy9eb3UtVdsa766TiXromS6ZH1APC9XcUxs6yVg4dx9vxfJksquZBhpmHFinpf3S",
  "key16": "2aw631fkYGywrexh88QQnWEsSPSjjNYMA44GhY8szMSJBV24ihgDhBn1ncUVt9w7gXoLXYpvE48NoXKNGgN4RHVX",
  "key17": "3xGMqRoi27CKVVWTMMTMjimc8sE1NgC2gYopEteFmcbqyzKhgbVxPozJow8aWy1LaTogPeKZGMiJReS38YxQFBiY",
  "key18": "2rA5o8Nx9837VFjpPvQjpgr16VzarAao4qMPK9eMuKs6WKRtHG9jZWCPKhvuvqa9zq8evoUpC698qH5Xaa1kui5X",
  "key19": "5anvpN6AAuMX7u8JpzZ3Ni7Frf8yxMWpUD4vZunT8a5u9pRN5Pjh5bBJsomuaayWgHJuQjtZUwBikCj9dzc71b5T",
  "key20": "3fqvncqwszRYwBv7SKLWgEReprbh8qRmwUjPmtXTvNBzKKimhQN8MULyDUWwZ8PvnP1EmAaWKyfsyq2NRHdyTarR",
  "key21": "5sobjCzSf6wVdun8sVW1vGmrURcpCGTtWBEo9XBQUM17wYsF7FRZCKKtbcmjwxYBpG4YLStkgmJ4vbRAT8k2and1",
  "key22": "4KhWtZVPCzcoFqeuD2oXX1QDsa42H2yquhSNYXBzdMC8AxZMcRPmFhD3unxqU3PoG61CYN2SaKhR5VZGM3VAFc3S",
  "key23": "39MZL37WrRMoiRQVWJR4Ti7xASt6PgqURZvAfB1zEBT6VDJAATZyfqi7moBhheQA7qZ3wr9LKU5icsbbhhfSvedU",
  "key24": "3iJMYFnhYjfNRfWAMFFuqzvLC3BBEqYNT6G2o3wYwkKmiP6PpYn3juk7JWZAm84LW5LfD7zfuwfTJsDfTu3qS5cx",
  "key25": "49neCNRTYHjU9uL7QyaqUHnTnCfA7DqM6ciWF5vmgUtybWhv41MEWMpNSiZfjzTJ2MkuTXZBmEnetQRpRAvChtxB",
  "key26": "3AmzZFKAmGcXCbrQ4FMmDVxwv2jgUZndDC7xc3J7d5U4TS1nsLiG5C9TAekWU1ULGTgDsD3C2u6RgC7YMs4UqyoD",
  "key27": "4ZHjoDDvpanVAQuyo5cGmwTwvqxRK53NfBnywvQdiWRHp3LsP6dECBiFn4X9f5pR81MmKi7VWeVBc6ra6r3xi4h7",
  "key28": "4Bn8wRbDWcURCHrExirgNPAQBkwUEWP93rWwPZa95qTMN2SZeXHQDaKrNv4eFhoM5Vpoa326xF9KFxKnpbVWtYnQ",
  "key29": "9yK8w6zrwm7pkaAAgNbErGWfDVdrKrhgwoftdcTTMqRRLMqjXCeidkBiKtQUeevVsKzBQVT3GQ3sTHU1rf6Vayd",
  "key30": "3A9KUcpxnu6cN3w4z2BjwUciFEb2XVWtSzhdf2QUSmeR6H5j8LC3TafqxicFWezQCRChoZoT5iB5AjgKaBnbLYfG",
  "key31": "2zuM5oMeMjjor3x5PPKCtxL83Zg9VvZfy8vJP24DWu8TcVvJaNzqts7DvPbMpL9Dr28CrDA4D9bN9xYJjHMzBsCc",
  "key32": "24XmsZUWuqRmTWk2udi9brdnwBszXSsejAeZuYsyxfPQPoAGELm7MTxywfu6x3RX4xjBsacTY7yiH33ddtwREry2",
  "key33": "2uLZ3owTKLyozHKv1jhj7atpj4P6VKNJSqC4zFP5SkzJrVy1sMzMHuNyfMkXkgdzBFNVytvhjXAAfXBhyddRYVnS",
  "key34": "5AtM6wbPiU8T5gcXi1TkDJDEDHfTiTTcPWvHkJbJPgfaEVwyzqbtmJt8ARYYH8Uhvj2Txs73htw9wnebPaTdnBqr",
  "key35": "5vJu29d8pzUBc6n2HqfpbW49K1Ew3HQnkBfhGG5pjSjpYfJtLMKVhAMZRjCBjGJgvWaVt8cAnjRcYto8estXVGN5",
  "key36": "4Z8pt2WMfxA9F1DoP8MJJUBHrxdDaKeaLdvKduLzDVnmVTrkyaEzCJ1oCknVB5XMDz72oFrk7eH9TQqj27VKn9Zc",
  "key37": "beWKxfZUWcYS7Ymmrt6E7mP3tQoRfRTk7XmcXH4yhvxqEkdu4XAdmjyjEQkGZEgPCHktSDbQbBqZTDDht2sJd7n",
  "key38": "5xzxPqCBbRtnkuEWhvFvumkK45tuiPiuauVbaGRbiD6Ai5RXRWixi2HdH6rVEe4hHWaeuWTMbuVXPt7uvL6WGNJL",
  "key39": "64QPUfh84zXEEfKh2uRSpF1dMTFHTXB1XCL4ut6jqRvU6ywR8REefsn5exnBaXUJy9FUMjSEsteBy9oLBshj9bnA",
  "key40": "47JgjGZjjjeKPmH853po1gLb5R3E4U4PYHssiCFZ8KbPXbGq2T2kQ6zsLEedcJNbFGcKxQRQCFjvKYfsgQQEF1hH",
  "key41": "wLcT1BEEuN9MJMhtE89MSVtBCuCquSJTNPPUr7gZCSDjLkPAQEYFMQz7U7c9oh9cuAg8dPtKukBeNBwogMziG6B",
  "key42": "4uvSkgdTiKLsiCsDPBsFPmCEjwFUkKPY8K8b3vu4iX3RMWhEj8FeGL319GiRH89SmnTU9vrfD5xQXUUvPtL5XQCX",
  "key43": "Z13qwzoJ1YqNgboveuvQB6rRaAnZpv3bkJ5RkacPRSWPpWfWMsTGarcHuekFmd8pqrPnd8HquFbDU6Te2ZBr4rQ",
  "key44": "2VEWUMjuDLMRjfcpLZ6f98obykUkoMqHCa9NbgQvqsAihH7Ss35f3bDHaSR1DapzCxMp8spajSW3P3mxM8heZykJ",
  "key45": "2u3FGXZEdfAMqkfGUbNF2n6AyZ1HUPxDEkNgAKcRAC3yWQksBAFKrGCA8hDr19ZJgr3u5nPh99ZtWsTTKUefT7Jq",
  "key46": "2ujUiDeQSrBH9VomUqHzjrLMspvTXkrthZt1E9jXbhQ6jXZYjjXZRkvjBpQA2cHTCywyciXMeqNNhT13sLDBpFtg",
  "key47": "2VsEKQzv3Sw2zCmZXqCaMcdJbvY5Pm1j8r9gkxPCAftmpEtamfEG9HBYxssUu5ZsHZhH2VQ8Vko9XwMerfHAnYap",
  "key48": "58uAvu4qw7Cz84FBRJZKMyEzukhPhmuRA5or97mJRrcKDUkpU7U719dABKNGuJmfu34ePHhwML64u6pQVtLCaQg1",
  "key49": "2Skbqgd2NtAsvteBXxWGu27DEy9iJyDqejxRhGym6PxtU4xGdKEzH7yDhKConutS17gs7j83Ni2wtrTibaMMBng3"
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
