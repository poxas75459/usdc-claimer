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
    "2Cwhmti3ciE4bA93cCFc9DnTLNFt19Lws7woRrAZQbHy6oJExy9ZTTyzq59GuzNc1oEQHH5mZhm6mrPvZ3nsEGHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eQ5M4ba9uDb3Tbc7z85ihEbSuQjAfn6itCkSSy5yuHg2Fjsx533w2yEMa3eyxTfBvLBn5yT9gswub33oPTwriUN",
  "key1": "41XBYY9UKZNdyiSLes1FvjeK1JEZK3FFFX6z9yn6XxFkE3K3CbffpiR8HLT6uzzr1Dfv6w4SjdtTU4QU4g3MMsgj",
  "key2": "2tCz4bAw45byFCSJwb4MWS42c8PxkDu5A82Qj3WPrHG5N2XDLUhZo7KXHvpcQwbJBUVEYoNtwqy4UetYhmXkBAsu",
  "key3": "4kfTQE2nFxnFzYVQn1ktgWzKKXEtfmwzEMB4Jy1YHusRFi9f17UmPKjQ465iQcbjwiUmBXJTFyusnLpwMsLhf844",
  "key4": "4Sqdrpxb4tHn6ssrYGvPuemm8c5fvyQpFEj9JXszNbVsxHMwhE7Urr48878G91BiEq5c3HQnfYtKqM852VTYEmPm",
  "key5": "2aVZUzeVJtD6u2H97UqhMtaqf6yjUZdzTRe1w58kyF4SS2SNo1FHDKqM3wCdtEGjHcWPrprpadJfDSCKtyuHePNs",
  "key6": "4pT64E2DtAYdTmoaHDCvRBt5D1x1KKtsRbUFbMuuVPg1BxwspoGFo3kbskGZPz5YahnJUknbrMsog8ZgXCAynkRx",
  "key7": "5LVsa2do67UtYRxbHrrjD1wnN5SgxPMUfU16h3Z8onPJtvR55ef2RNVN4BGK9XL6WmMx9Erqy1chknsUM3X4j7en",
  "key8": "5HhRMYA69QbgPYJqRZiPzbutu14PRzWrdcf5DiNV9FW9otoV6zSq9pztSUZPy1JPgXHRh3QJxYD2W8X3TYexKjTu",
  "key9": "uiWCm5Ytb2MuejGfa3TWcxjotRz3EHZ4JipfcK45zGdSK3RFx9L9KcaUTYkQ83r3YzU48Gnam4jsg3mm5vU7Hw6",
  "key10": "41oNuyYciX1gaEJUhLKF8QBpKE6eKYyN7wu11qurPwBHd77NS3Y73Uf9kjvLkw56GmR3V54tVDbypnAAcLtM13Je",
  "key11": "Dgbm1MNjtdWn9UjRrxakxc6s4rvv48BbKoBSUbaSiGz5vMFZKRyq7ibxPe7UvcWD58ddTyb3X7dinfEmNxa5rcG",
  "key12": "4wWs5J6cBCvgrCLcnckikWmkKmGmb6HaM2bLuYnkskRYSHepjb6rvLx55AAPbzqHtckFVebSFvnqJG42UXZdhqkA",
  "key13": "2kA6fYeTbXShNRtnRZM3doLWqxbmR68G4Y9gvApgXx8WBStkbhQm9Xx4kEdEkjxKKj6Y14UGRsw49nbnR3W3V4DP",
  "key14": "kzcQRWridrGRp9Rp3H6fFKzgsEcQf9biE2AaGWMj64PeijNdW96BxuMM6bd15yZBqjfzeg7GH8dAS45smoWRQLZ",
  "key15": "2LJEYdqmeEnnesFk8UysKczZENfFfYviqtayypVJDQrXaWsw2bNhFw8SeWuTCtpTyyBhyXpdp5wUt1PLETNVpU53",
  "key16": "3gwNQpd1zaUVBaALRaBFNvj2owi8r6QdTxAgwxPWhFC966LDUURnMoSoG8Je2p7y1Z6Vkm57obDNzSj28S3crj9Q",
  "key17": "4Ft1qUDVfhmk894B81oWTBjEYrD6bDMt4zGf9ySEoqXL22ZEaWrnReeoV1D7jAb1BWGiucFvQCVAGXKze122M878",
  "key18": "2wr5gyaTQM67YVd4Qtwr5ZBEMEBeJesDiws9MqHH5pRnuEMS4TCYCwAngRKGKw4TU8tv4nNQpenyWCQnE7XVuJpy",
  "key19": "2ozhu9fvpKdeEbzt1PabTgDZehoeHQfYrC48zzibWwboM4Y6rgZZZajKC9qscLpmnUSrX8MWGKEDrac6ZqUNB6ki",
  "key20": "2fBU9dtZ1pQjwKNcJEMHj4akxsYMQZ3htrax1BscqaucrmS7QB5pRqzYLvbPBGnNzT3MsjHZFWbFJtLMuDC37THd",
  "key21": "3XPXxL4ghYm3DqX72agsdycjGtxjKAEEBTpcjsYJcgjgPHEag6TgJMsTysvrvkdaf5JWGQMH6YzAj2ZqD3fzi2G8",
  "key22": "2yaqGuybSA5gXhn7LYt3hFfwuqE4KDzvcQg5oVaWwiuvCeqyQTshbe8WREmrXg1Yf2axtsBydEfYNs9WDpcE6j75",
  "key23": "d4ZpKvVYjKkojNzgUw5GjBnLbwfFvgCRitf2kW2A3TJVoLgjV5PJYKmWSbxW84fSnUzZ6mp3Ko8eWBfxXRuQEQq",
  "key24": "3WmdwiCnLFkbB7mSu3w6WAzntKjmGDm1w9fuh1V1ZWZgEVuzJNmCHNicBXs8xGNzF6wXWmJNvhuoF1UcmoCC8SxN",
  "key25": "52G3dqE1ecZWfxGvBUUAScug8juFtjEdKzJ3dMnnuMVoBBe22sxRCKTg9Qfa5Z8DjPxJCabafJioqH5Vr1wrzD31",
  "key26": "5Vg2PoMjKxxXMRVZCjZGccL3uRViEFq5CkjMq7gAhexcKSSwG3rdsg9DDiBYZ8mm5ECRKJmCmfqiZg6hKEX8mire",
  "key27": "Yc2qgtGEuZyFYyeT5GHiW2n8yQUVHbnM6L1LvD4SZSaAfXggLaMRvbq9bxzw72YBs7NxNkg3WC6Sk3v3qmF93NZ",
  "key28": "4wBaEQ4JK5en8bDtss3x7XKjpjryqdecDj7rQPVoK6UEeYk4aJCuKZ6opAESrkUWUrNx23EHTDgSZp74Zgckt38S",
  "key29": "1qJVbykuC4pBDcsNr4cC8Tg6vJnC84D5dKfPXD2CFkAnFNqruYPx4ts7aStcAq27JCWynUoDEeiHfyT9aNT2XDi",
  "key30": "bycZW7To69e1daWEABtsYVKdCobU1XCac74cykT5iGhKk2knm9RH4zGJz6agkUFg7PedBu1tHwFo3weH2LnAsvb",
  "key31": "2rZ899mntdVkmpxvBVFgmjfgQx3Nk5BU7P22hnwA5Aa4GmiF5Fyk7mYyvvTxdyjqqLeGqHu9nXdbD7h2kYhoBkvx",
  "key32": "Npp7Jcwit8TLYnUgaPyv42PRYWyNqkQNdEb6amKYBa6XLhcnZ2ejDoj2yE15qCzaPfhusuhmCah1Tdv5k3ijPJa",
  "key33": "HwEqKY25YUPLWLiVoEeN5iJTFVkZu6KKm4PZxuBuN6Dex4fo1hGeMWbjJ9GUcJghVG44AWznRjkneckk7fsDdPX",
  "key34": "E99BAw6DmMPvwZgU1pS3HRpQ3vctEYptnhofupoTuvoBR7g6VGXLHS44eToS2L7njBAPbfsg43BPXZfzi8Ac2pc",
  "key35": "4MTKCwJrdmYkpcuzBqoZEetiampAiMNXCaZjXyBS11DscTgaCeQ75eZBS3Xse5W1bZhcHq6E1EjwdYLrPXio9nVr",
  "key36": "4pMtCZcy9c7yzk6ritY3KE51wwZn6GYEmG5SWTTNJ3Ty1WquAXQfj2BVEPPsMQ9wM8QishHi9LxcvU9sKhEoV4AP"
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
