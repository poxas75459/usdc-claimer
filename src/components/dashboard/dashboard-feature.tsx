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
    "2mjXU184BVZTZxDXRMse1QMHYutLgcpbu5EUHYVuFnfir8W42xBAZP638FtX5hpKxXKeecYiwEXTFUBA77Szepft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MDDa8XnBS85DTED9C4adMAC1JJSPEgWJ1ExwSLhqBMLGVFt9mVDTfPkqLhm6GofZByPLRrWrD15ka5umbciHBrr",
  "key1": "4GSNwS2oukd3LubdUqLP2xhkrDHJXHjzpBFppE33rRcHA1VrYerzxAStddBuatM7rVjKWbNpEm2PVigE69UxFRM9",
  "key2": "46Cohv1VM9cv7yyGtdj1i55wTwpQbbtmmVYK8hMov26Wzb7qtPJMVkouiyb56X744CTtmTuWEgs4ecTw4Ro39Taj",
  "key3": "3owYDQ8cYv9GphXZ7Umt5kEkDedXTFyPwengMGdRgXVKH6TpLeKVQqJMEymcHk4i8xAjkzHQYcEdGqFiEC7qFtKf",
  "key4": "vCLsCbupvG2ojgYRV3cVcSmvmejQuMvvMgwT3iQxh8pKm4QVLZG1D6EthpyFWW4fRBpcjEtXgTuugvChynuaFnX",
  "key5": "4x9KyK1R8h3Ca69cwnjc76cL7yRo8g3Hiwdps1kFann3bmKtDMDVZ8ZXPP9eaf2D2LTkFhjKfSQzajfvh8bV6hKa",
  "key6": "2mxpfekHSVALhoFxiBpjLcY3h3MSfapykf3CUJVFP3kdmNxQVyHmXdas44GaLSUTjT5GHhtD1pXCGkvgxcXizu1m",
  "key7": "57y2AK2r2XEEzA1dpFg5naoshZTAY4TzJiq2KuMKQb5MNZfHNBW2TjbcEMjAJtMA365czSQo7woyaAjqDby9PAxL",
  "key8": "uSZQFegKaVQKgnjkmr7TT6DwULtkep7FpfYKCk6vdS2FBCRHDYDZ2odXfbX957Y3tL9m4B7KbQTuCoMQX7yAWq7",
  "key9": "3DBzYCrTDFSb97GRgATs7T7wyMyhL6fRfHVBgCvwU8qFPMJDNXUhx3kwHZVjMkhCdeAWsTHXCKDuoWMjzg3rh3VC",
  "key10": "2UB9hcMkWyTYtDh6hKYJVZBCeJ84vxTGWhzUMDmFzX1rtpEYfjUdv7Rs9XqHQqMEruT8ixvA7T6DMhBWLcLqD36X",
  "key11": "5BmxbmUaow6Ekg9obRAvwi4gMHtz2PVvFiy3uot5ZKRgoJok5fh5PVzB7w9BevyPwBfH1khWPZr6mnwVYVcspw5N",
  "key12": "3DffkmPbgooCz5gxJxN7uH7c88ZNKcm7mHSF1m3eZa4JePqjdn5nEhvYYa4S7bSowueUQooHgHyN5QzfNYp2L5qQ",
  "key13": "5UWkiD7zB9FHik1G8taSA8G3uGVZmqYJE29mBkQoqypsWTHZU1pK4cCZq6sbXjSS42sVDBCzdey4QWRqFVft7Xod",
  "key14": "3RfWKVvjdC9HTGxmMExBWyV5j8wjSwxgL2BGLpHUAowJuqBC8H9fNDND9LqWhWd1tkL3ooGrfkey6hWG4DCMVJPC",
  "key15": "2bUnHVNk6EHf6fwRjQnH5yCMBaDmV3QDPF14pKygT487k3MKQF7VWyRTrpEtQ4tnNCoH53urciTgYsYVpzgYQRtq",
  "key16": "3qdxobg54bDMuSmiJdHio6RLaNUV4Sq1oNAF412N91dfg8tn6aLajFNYzSj8wGuNtKzHRkm3YdRKshvyvvYYuf56",
  "key17": "5kJWPDuMnGfmNjBmkTTfUumwAwmxwg8ocmhRDYK3SZWn7tSj1U53pxy67e33Q6iGGTJdxX4BvdWW23sh5xM3NNey",
  "key18": "3gJ4TsHrG3YX7iXepgEasHzSKAbLHRWNqenKqCd1aA2ACPGUieqkZgdK6yi8LUHigyDt9mfQJf2bQA7ko1gQ1kvb",
  "key19": "3VezZhcZsWa2eQvjcGV6cmr3z11eoacZt25M7bAvg6vsh6vVWLT1M4BRCgbCodYC3aeCNTaz4dq5cdhpVvqa5yzD",
  "key20": "3W1wapuUhoUvU8WQgXhfVedwaxkX39nsht7GdDnhYKANmkP3ykKWDNa17WwX8YqTRQQqAMxAVPn3kiHpSwfC6HwS",
  "key21": "5xa7nJW84SXpymqty6keTsza43uSyqXjD7wDUfM5hXH7h3Q4UsaMsmBAjp3zm3T4kib2qw8kK3yVm6FKSrmE7WME",
  "key22": "32VegoAvzM7UD7Y5Qsqau18ZZxtUPLQASJBBgpPkkfGqCh9YFgHQMU1gLcnYnKkXZCpGbEV7hjuGcDmpY1M6u5WW",
  "key23": "k49w19DZGAffFeQzeUgccFZAvmfgRK86wnhV93j5RcrGqfiDJguXKJUPS3XewBFBZjfrEeg6vM7SSn6vdEHavrg",
  "key24": "3FGvCN7cr3ShCunpXsmoi4L9aZAAP7p7i7WLML5Fib2xMQTaoNwff2AX2b7tXV1qEFc56KV4Qiu96nzfQvSV2NHj",
  "key25": "J5TMBfkYK2MF7bLy8aA8qowR9tCSJd97YWdjBu2gXVSsYsixwsfqC33Vcn2t49Un4tP6DLkTN72sd9W5WPt6ysC",
  "key26": "kmcZDTqpgx9uhk7xZbm9UqxuGX4HPMffDf6Vu5otEcWRzwaGkXxieZrr8XEnFwkLU2MhVtqYXbjBfng8tk42NN7",
  "key27": "4ngvgojdmmHfCcUZSe3AL4tn5WSKvYwMREWkwKYN1aGuUzvYnXMuzUtocSM5DndUmAFUvZFknki3vJqLjfL6N314",
  "key28": "26EKSyYmfTHshWCNmBFN6C7XD5yLeW3hvNr1QaNw8Mzxsph4RvxZLJSis2qXW7mKSNA5nJKvBAt6CZqp7KacmzFS",
  "key29": "23BwgN4wq6r6eQqp8GSudyQ4HVWGLRAntstkqKJgskmWgpJoJ57nqyTZNhqcTjHJxrwpHKZRmdsAhZRKM3LrQHLf",
  "key30": "5X4gFJc1zqMBBDjUB2Mr56g5Uhmg6mLP7dcUT8LnYd6dzRuhd1Dpm6Bg3qhngNkpAu3VL6GSFd9iteDq576x2xuQ",
  "key31": "4AGwq6EHAq8145JE7Jc3Xu9iyA8mY1xvRYGQ47EZm4iwUzbwvRvBDnEdSdNoU5j3qQW7cAeNQDvgo6HSSxMmnNJa",
  "key32": "5WrXE7J6rPTLVwxWjr9GCPM3jbSbtyQsc8v2QJYRqaVUrCg191Zfi1TUaRSf4oF3ymRZHhqMUmPkPiLDuBrUuVwk",
  "key33": "5SedbGUFeMwaahyUYTHL6kV9KcJy9Vj9m3A9iFLScvXh9LkmxmgCsLpaq4PDCyRkb2rCqk7DH9duxAhHrAjfDhEP",
  "key34": "3eA681pjH3G6XHXnWK8u2xRra2t9GZyzoaSzhXaHr88HX6Jwh8zQtChBwFuakgx2MSU4BHPEHhPFjkd5Kxd7S9dZ",
  "key35": "2bo6eUcTTtuaJRfcJv6GnuBmCkDV1zyaVSndDY1WLZN887WAyyQTNNEUgSzphgkvkmfGqjZeNSJXiwWcj6wHLZbd",
  "key36": "32rEjvxypcZdjdi4uPC2STpMTTVoKzcUbeyGnnZhDAEeG4TToNUsZE1sKgKsu9kH2xUCdDHciiu6S7nRjojHbEVQ",
  "key37": "5vXrDb74onsYSotkWSPJCWvJSsFNrKZjSV87BXUhS8J3xVwQswEE7utr1gemJYyH2ZAVDBgSg2gwtYbNaGuCjRkH",
  "key38": "2NCsZBC3DXJW7VgM6j7RDDB95J9mGmrMp5N7MGQzKrpRbXjZ8Sbzd7ceiYcHSK1HWJavSoAgTQAkWHYu6bdCvnHS",
  "key39": "2e51Aesqux5bTVne2E1jWtgrMd3sXmPJRBVQinbnrvRW8oYLubVhFacxWAcMWaY5biW86tC79VoMo7Y1icFWMjAW",
  "key40": "2eNyhYqLRDTKBeiV1j7RPiuiynaR8kHagYsKfXxJAG8GqfVk4QZf3hekAoFTMkqtmHBKmzrjCjABXVntFhJ9PECg",
  "key41": "5xBKtkLTdaZQgSWkBzXYcVVwKzDoZ7jEpHXrSSWEvXqyRepFPffAF3Z3gqN3mQr3LFuPmm9n1gwhaiyFjpceeLwM",
  "key42": "2XuxRNvvRX6nA7pC2XjzfhAWCSQGag2RfYfVM4fs9XJgmvfBkb5UXVCMmoo8jBzNXSZgx5DZL54bJeQTAA1TM3Wt",
  "key43": "2YYHFmnsmq13r7xew4r7EZA867kFgB5x92vXeg7y6NTv7fxSzhrN4sCeUaBf6b37zLvDYitYEW1sw8p7QHq1Ahbb",
  "key44": "5s1FKkEkovMgZ8rewbnAvYkisL3BiBrTRfxKqaiRuAHRJmNmawpzwqmBSsVeuNzz1c8MWqso4D4gLp88Ew5PEW8f",
  "key45": "5zvG2TeHnwTpmpPB7a9ywWJVMsQDSV8i1uYmimvna3yTWQZsboKW51dSNfGqaRi2M76nhYudTWmfWaZKAexdUhSw",
  "key46": "BZiBZbGiEr6gGjWYhmxUGde8WXKiEW1d62nFGg1Mf7sU5YSP25ztj2UPT1PqoMRpxw4xWLFMeZ3dKzGTGyFGMxu",
  "key47": "2qVqDQsKYhv2FkuKRD4Bh7dyyeQ2957Qu2HvKCTEru9U9Zdj4vFFAuXoraWuDzLRMDQDmHeG4RkHksVQ5HhaFCLi",
  "key48": "27YQnUWHBj96X7z9UeuSMzagqtuMFMU8xpTebVdynP6CstNjcmA8iaZ4AFgqC5J4nK2qW14V8VhgPaknaf6cEog9"
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
