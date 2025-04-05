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
    "4CKjCzcHMGEuwcB3BMMQ1LGdLMkp2vrtHdN7RFjeDnChptZG4suzsNSJj2WZ1zPJUwoTChtZgx5z6U6xovegzzCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tXMjQKRwP2Ev7coDM51x9AduMCdL2ejyTuxw927bWjGCu4UzGw3W12ZKZLFf4LLWBBATe69k1epgHRPW1NKah6Z",
  "key1": "5GGQsFdXbLTa8ShoVCsJ2E8de7rYzVcZxLHPWtembyp5vhW53rQWn2if2MWDTjmnHKqwt5gpSgowNZJ52vL8aZhv",
  "key2": "sgEVss5rWzJ6LNjPYwPAyUhkYjdG9m4MpzMus1ViL9CMtfsP4fafkBpmQ5eKzZzpFBJVCyB7AhiqGam7heXRrf9",
  "key3": "3VtTuFo5DqkBHjuYqXbSdKR9uE59Z8Py62nuU6buknniCxKLRYmmrf17E7J6FhjV1NeRQQDkxA9hnQZ2qj9JCK1p",
  "key4": "5yM25oRGgHvnxgzATHFiGwHf6xnNSuda9X4hB1AZS32EfSsWNnw3i9r1baKXhUyx5jqHQZ2GDrVUL1F86mFqziGs",
  "key5": "4VJ71TfY1ZwjwCGzR9V77E31U2hc8sFkFD6mMh29KTo8NeEMJ7SPiStWTVobx4YJXksd5aWtBHW8KbxCaYiXwLkk",
  "key6": "4MUyPJum2kgv19954wvbH5x9jbqhxVMvHiF19tvNQRWmBgeWzWnYQvwBuDjpUT7CYd1L4WXeRHS2UskfkahxYutU",
  "key7": "DxrGRoP6Hx3UvRREAd219YFncTLwSK1PHQkHwcph3kmV7tT75sEuLgM8ZqPDC3LK5Xiw3rhVsGRy8tiSfpcgKzd",
  "key8": "4kiz6k5jYqxMj3eT97TWG9w8oBW1i7SxwZ7i7JKHAim8hhpmSkcipQKPsKZLVgNmg4VgwPHczeyte6G6NMFkkhsr",
  "key9": "tbLM23KZnYdEVjrJXnFPiKdXtaSHmD74HgbHNchHPQKk1iuCuYpaBYSB7MVRiDR8omeqCx58MBw5gdtj6jwE3S5",
  "key10": "58X3UL86H5txnBooLERNS2XBHBoAeLZvfXjQ8TLqN5rZiYEYma6ZV2jnp5pfX95eNJ15kJa2UssiWpkMgmAoCf9p",
  "key11": "2ymXK6caFFXqpPp29NhnCnTykCCyDGGGzDfZyRrJs6B4dE2C4e9ajAuhH19ZRQz2UfvPiVjpKBNPuUSxrx1hSdcf",
  "key12": "549fE4vsMwKpEc8owQfd5kU2JuwFWfnuQRLF71YcNCXEEbiep4oEwG8qGmPQdPBZr3id79oTAk2FcxeEzk33QX9q",
  "key13": "61QeTzAd96pg3iBn7M7qpdFY2j5aebSYnvfD7ek1CdrHUfnTYuinAkfvgogrFKqj6Vp2KLqvt6VLi82XbqW5DX4v",
  "key14": "46PZ7B75XAmirEWa5f1bWnh4kitPXvdpEA7c7Z8Psqw6Bz1wZBKMdd4gnaTxX1rLumT5dZhDqey5C8S3butZSRa6",
  "key15": "5LwUVjESXeH8Xudk9FSXnCWGwb148eZgPjb297K76gH1J1TgtqR8KvtYLaKTDUTZSM6FjvmQguxBqNUiqswvz3Gg",
  "key16": "5UBMF6XzPzAed8ZbGrEiCbwAuAjYQ2mc4mTHrXyYkEEaoUBsTDZ94WbYDjppB9DzJuPi1rtpnwFaZoLeSqYffYF7",
  "key17": "3Lxx231H3ZN35DcP1Em2qteBSz95PDejEfhsmCk1JN5R4G6jpBg3UzUJnDERMpNVQTWdMECGEBdGPaq98eMJL8Az",
  "key18": "62Af1ESfdDWVuenjXMnWsLi7KkB9a1kKah3XFKmVrLa45R4YkJvpPbjtABfmF5Sx9tbEPWVx3UEMHD6BH8iH2s5r",
  "key19": "2MtyL1xMGeydpo7w4xh2Lr4Htg5nKCYdhnjvtHBZjtJ8dgXz2U1bYMd85oJFH7xaL6g3T5p4WFeSEN2tD6QPbzis",
  "key20": "2xNt4mWmpM9fmEueECKQiCeupWeSUf2yPnLDukEvjTCdByiqVR98nTvH2UP7pSRpLAzjpM6iRgU8KnGk9MczQG9Y",
  "key21": "HtYn2Sj8fowvPQDAegUGgNonaTSuP1dDAcUnmjyY2ME36UpJmLAJWRgtxFp6puWKpXnztJxDoDvifxZPTVATNRY",
  "key22": "4GGMmJRHfbtLpVdSHpmcxt63gvPKGKYwWiwk4mX3gQaxuW1vHnxWGzjX263UFP5M9k4gqdfyzVjpewwPqeRWc4gr",
  "key23": "4P97LN7zdd6ThM7YshtqQsLux6uXwu4xRciM7MpEav4ev1QPFoYcy6xkykuHvbD1ib1AqDp3cGXdYYTCWR5zg4NU",
  "key24": "4s636HZv4i1RQxvaHqwsiRSFjcgH8Cepn8wNtgKteBcDaDYkc4BLaujYbLwh9Q2EHEcufsAinbqsP6ZKip29ifro",
  "key25": "3zY3c74XoXAMMTuixbTgHB6YBJJY3HvFAzne4LGSJbjXga2ZPPN3kWjvVhrjE6CuR3WW4i1e2Y4Ti2GAK7mBzhsB",
  "key26": "2KwpzYBFAZqPgPLtgdHhhWtVtU4fKkdPiAMnj7142u3tP93b5oXj94rWTzdUk4Z3dEkifk6fHVVCWTcPw1n4wkqD",
  "key27": "4XEfcRUsAiTF3JikBZ44kSWY2PeMKntCRio4qkMHTb6TGpFypAZzx21VExGWPffZyCCnsFJfee5aBG3QDFVE9492",
  "key28": "61p2r53eaacr6ytQP5iVCxape71vLAcs7QT5sj1QaaMEhvx9m8r6znmZMyDjH8LZwq7Gfwfj9hkatefpVvib6XNk",
  "key29": "2NYbbrpapp2MsqTjTtx1PZGVoLXxuuUrYa3MicdHBBb99bQQfzM5REHhUU2AgDV7y8mHbqi7FA8mCFGX1ei3hcNY",
  "key30": "3nmKZvQE2Bv9N36Tqh9dTZqAgBvzbFbYnXqcwYHC2WAvKBqmYM44ibiNE9R93GxoViXGExSSay9v6EzJHKNNzUWj",
  "key31": "4bXsAJAUnfZ66pecBdHYpHLbknet6Y1KCGjmu7w9F2ZBj2hMh7uxpu7iQPut8frXvSEna1atqz9NsSbANcPbKi8p",
  "key32": "3dYpGRXrjQMMhdmGeifBojySmJP9334jdTrsEoT535gpBHwKyJwRyjYe6XbSRKoF9FQWnFZzf5g6cYBRq3Qs781o",
  "key33": "fKdKotvxnBuoschsLf6gmtuu2JoipC5nKHTUXmRtoYqp9pJtwMnP6gnycFr6mRYn8BtpKWdxdx46WL44nfAS1Sz",
  "key34": "5Y2pBr9om81sdh6D1mEobQtEuNuDotirZNtaB45rh3uQf5cFhMZK3zJs5Z48up8HyumHXRty21Nze1Y5juNojA8P",
  "key35": "3MQUjX7v8EQYogKmCdXUcQTEf1EHW8LP6bQrrsfXhr5Xu3VE1dXAc9zME9wMnJ2AXkYtnreRLP3rePYadx9PCNGR",
  "key36": "5fPNcxwCLfcaayMDfERMkddadwfBh2neQWZzDraK1avATzcctLzJXg42sURp2oRoNgfbwgwcYEe9uLg7BiJD68d8"
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
