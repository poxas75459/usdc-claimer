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
    "4mG24ZjwYrK23LMCAFY1uj6bTJzcXGK3csxNLz83sRXr45vAXmqoxWNP6fScvDo1tPzy8hCMFweuq9HFTJwT6Yg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gsfSkMEXgfwSiBYbYR6moJCpMZbZYBrunRACJFLFL5Yv9X9VEm3DXq9zMi2uYRdSaqfZvagVhkYRoWm5XDTb88R",
  "key1": "5kzPWHW5YHibxSr9696CdNgHtNZgEEhTonmLsooAQEXHGQuaezpjJdQ2e8pxmtETi1QmYR1TuKuAbpAr1hu4Hg5t",
  "key2": "3xXrSe4pXdrBvtRmogX4Y5mN93bGxaHcG1FXhVowxgfZmF5h1zMP2UwxA7QKbzxZAqbwQNC927qvFRDehPyixgqB",
  "key3": "35cPkuXoqZohvk37VgzVkLUb5ciegFXZtos3orE62nPPgP3KvNWDukZ6TGwJejqo2K46rbxJnCmVwSgqGJruXdkh",
  "key4": "2tqg345bQ4gJbFzZkn44iGg8gibS9u41RtLMpny23qN2ked4nk6EKTUZ6JDHctrohqppHW9XNSGKFcz21o2poEzK",
  "key5": "5cUMCtePxRTBtmXKCBB4J3BcLEJ7AU9ZxXh9cGNeXgGDtrGSDqtEZ4X83ayd4f3kvQdt1nTy5Fj3Yd8QkepHNRLM",
  "key6": "2rNGcgwbB5jdxzgnXwLKJztLCfmEj224gG4qLzD5zKqQinpNTx7KMABGJthdUoi6Byd6MzHQGJw4Di46UbkPbKcN",
  "key7": "4Hn7uaqii8NxtCGSfTMxxUjKyRe2SMQ8vj7oAh3swUzovNyPJg2TRGN9aR9ZRqdEdiWxRMhKZh3xtastRVb9cipt",
  "key8": "24pr4udHzrPoNN56pQdUzWgd8TYL6PDW8ryiaon7LN1LVFKvH1fmACBkKDLfetrXksqAcxFC6T219nJwRq8T8r88",
  "key9": "hC8RRSibWFkE8qSLUbEKr3wq9bwCzf5iHiAtKxdKs25vJhwEAyoyVJL5QnzGKxN1tTAV68uvEWZ3kGv6QUWZ1n5",
  "key10": "2Ntmi2Z7eXpmRke21tzhqvRMVWKrFxM26SRKMogUwStEo83MwFgUasZu34mnUeP3mMXr6yneGTXYcdf86ho2tFin",
  "key11": "21Xh7Sqd1QteDtSLYjpzq8mmkodNWEXyaTYRTd52dLAGfckP46e7eWFqidbPTZGNYkuehURuFdTSvgMVkk1UtRDF",
  "key12": "3bxFaJxJnqQMrbSRVsxv97QjVWWakbMqA6SM1BPG6R2u1XYJ1wiqyAFDbrbbsGGprkeg1thM4rNaxJSC5JxQzSAa",
  "key13": "3924iMMPVRg2F6q87RDfRJ4wZSZn2HzzPWjhf6uyoXhWEZLutGGXAudgWk6WDKDwaXmaLWAukf42Huff48oYXjRs",
  "key14": "4rPC7DhcDcg6wgMgZjiKrVVDKuQ4Dh11eQEnfeeoyFAx4S3pvDPUvTJMfp87HkhSAKPTzrPaYEiFRtDZ7zhwnG6o",
  "key15": "3E3NaQcyw2ehBzo2sDT1bSUgm9NknurjTSnPf3qj6kWnfZotFpYYbPWs7yEEu4ydv8gyEjDjmNJmChCTFWXassmD",
  "key16": "2EuWFsam952CEQ8t5g5N9GGDQqXVJ9ahfTqTvscQfZ3GoRph1ehjZPPHB87SD8bycAr9LCULtHkdTjS5JrUzH1ui",
  "key17": "4hW6vRHUchgb5J6iJQXKVGnD6RNs57B6oNwJz5aTmYtdN6iLdUCmyeoBbFa2zyfB34H9D6ZH6oWt6dgBUtGJuq2L",
  "key18": "5EKTB8ReiSZg8cGsYYjC31hWsLevmvMUNqGVbRnzGH7b4CtSuzrEz5HHkywxUMNdcwPZ6a73K5fEHQ1gb31678yd",
  "key19": "c3ZS6ws7nDf5gRUbHQHbBu6eLeGAuEJfQKq3bYfewKbUyQcjmFWocoxPTnPTg9VnDsFUSWYqEQWjZrVcFzgBkNd",
  "key20": "3BhadMTQSkEejiyzvNPis2bnuywAuXBVcQ6czUbvD1McbW5WwKrLzqFdvspVtxQ5FvXXjnwRx1zBJsYwArkYrkDf",
  "key21": "5mFikVEoMtBUGFYyJq7VWMeJKmTrWUTKXkJ2mvshsfxLf8gUjaJY8j2zM9pNC7cweCR3FgZo8SLCfkZ9Kktiphub",
  "key22": "4WERU4z2u999tthF1RtGJ7YJEUajtRg6ykK6aB8817mogawrp1nxfpN1dLRwXZXdT4UtB8RMUW1fFnkMSTmHVLt6",
  "key23": "kMZdDYaMQYudc4jt6nw7U4PstQgWwJ4VsPpRhcwBy5BMmYw7yNJCypSvRFZuL7AVzJ1aB1EuZPpX3M1pPCtSgV2",
  "key24": "5o21vUXBUo9wLmw7VF8zUpev7gxmYA5C6wBy7NYBB3bPzUifvdbRg6WkAPVJdz1DukKzcUWUzqidkuoFBi3Za6xZ",
  "key25": "5kPqv4RqYNgd98dFXvGhkskDwbchFHYQKUAc4kk53jUcMEF9nywRk8xWRcwDk4ncHUPVJvjf3KBhDKDzedSKaEsB",
  "key26": "5BLQzUsKS9wFNxoz5ZpqdmFymSJunUa83ckcrcVb23wbDm42Egd2KhogvMmQrY3GV4V9QA3oMo6XWkzt4bwdqjqq",
  "key27": "43WPQt86LPN3dCVkWJqBgeHd9HukRzjuUiqaCUVWpj88zbRprW1D6hr4z6MZBZH8qG4fWwmq4dMNKBLyUuoJkPa6",
  "key28": "2UJ8WpWUhE4XBHALajRP83y6dyNxiepbmU4LZ6nMuadTx1yjRnWo36JioEYgwsaFF9Q1NJsPzDSs18uVCEW9yVK1",
  "key29": "3J65K7nPh8x9JszLRkBBvZipHP4LXCPEEePtcjoquKanoRgHZUaBpARb4qmtbe4uRU2xHCg1wEvBxwvQGU8gAded",
  "key30": "3vHcgHjiDLanCWXXsgBXY4LddgVv9ZSjfjNQBFUMiR7sX1Rrg4Mn7C56Uy4QUozrFrEmBRv7HMgFGMZAwSQ1NHST",
  "key31": "5E6sH4NFZmJipGLQCau464NnnuihQaYpbXQW438iaAn1kbagyiL1P92uZFibYDP31rmj8LTFEkNpKNZmznHLpVuF",
  "key32": "4mVo7oAbvMLwvTru4DdEyGwtp4THy15F9fvnoyizaNHwD8EEpgPQGiTaqNLEPzjJmUbZGNB5cMdau4DJXANyaUMN",
  "key33": "2gWFsiAXqH9gASCucsXnvu6RjNvuLPtSqPuoJWLeTt5uN8fpFzNhACqQPFBgLqzyrH5NmNdjJyz9qoiSwsReDgpA",
  "key34": "3me1r45971GunjxCrRyGRh7svLsYFGpMKNY2kjeFTpQ3KHtK6wRgMpQmHLDBZ7zc3y7p2Vt1bUp8s2mrAFfbcj7j",
  "key35": "35zHJqCQg6LMA6wqQ63uv1x2hhqxzfJ5ZRorh69ZbYpuFPXkJtyGu5C7DNqtBdGmzNkVj61JLv3zcN3piJe4pibS",
  "key36": "61wsszTfCC6BVFGKwwpL2c96Q9zqo5Y5dkqh4Z8BYh64EdrNeP5zDuurq8r9pvncxRsfyyPinEP1cNa7iyLdjkPH",
  "key37": "5pJExtsATLEXmsuWpSXajCi7HroXSL7o3k1iAMLtwz3cUtW9vsK2s56AuBDZWj7xTwPTTAJirQNG1P84JfJxEbsB",
  "key38": "UZL9T2EPJATV8LS6nUf2cPN5gVMyLSwRwvqh8dK5dhrE7oQb1dVGUzD3uXS1LsaBZGadW6UNrMGRrmgAyFod6Wy",
  "key39": "4PpVeSBDhdcrFCGJ95mv8TUPmUofnmHsratgXhrCPboNSXj33yXFQXXL5DgqRvcrrmsAeDjYp7EFKJdUggf3Tym4",
  "key40": "559DtiHD6PHx82ctkMEhfHoa513PHcyQqWAmy4b8Lh7XbH62dxpXMJ4SHos7wCYCvSeKVDDgR4L5JFtWBFGefBbf",
  "key41": "3efHTGDrmsxEBCkzEGMspTRFNgT3SSboW9L46XGCGw61XahSWJd4q5vtnkv9ZXzUUTyDUgrmtvKSfTMhuA7fGbnT",
  "key42": "2ZLAkR6qfrT55PNci5FUPVbye47Ag9nqggnn6DGNEZnvadYnjRE3q54Fozg1Tm6iRs4seXVyg6Yq2kDciLjMDkch",
  "key43": "36uRgptdMZoqo5zn4b3iAFyi3Ti7fnWgNg2ZT5w3LEw1kesSaLu78yRsLBPeLf7UT2kYkSueehdsGwSfz1x9uKvv",
  "key44": "4EuNQBTbos7rggUMfVf4R2g516J1RdeJ5cVSSi21HrUS9KFRLwKa1K49fYef1rGhvnox1iy41d9NtusQ5ZbCTUx9",
  "key45": "57594QsHbqUM6jUmui5ogV6MtT7e3ajCqdVSTtSy7coE9rHUiGeVEiMuJcwrRpswkLRHJvvtnXobSqxxBXQV5hvB",
  "key46": "3akk8hNKzVvHtTBNzCxLgjSGiW6Ar4HXoKAtkLcJxQNB1oEtFDdEsaiPWXuaKoX9urj8B4rAW2TofxxPx4nvJ28Z",
  "key47": "3tGM1qXJgRoLPSFvkKr55WeVzYmR1wwPm7KaHzfSVPyrZQ9VaxykaiSTVDVzaqygYj7AJhLCKM12gzYn4hhsUXoa",
  "key48": "4pUdFWWc6t8KEwiLgum8Qkj1NppYv4WcHhJYMa2AC5EhooKY2k7U14fh3R4p8YECey9CDX1LtNXzkcZ6xRhKCP7t"
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
