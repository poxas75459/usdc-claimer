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
    "3EtLQUR8KfBdquifq3sZEAKLs6QgjP3rxrCYmJyJHtremLxxnyRQG67JPBJcWeDM54eVx6JUkDBEzSmUfY56yggL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b9RL1txDNxy8TmwEc3W3BE5gTknk82FcQT8rzmm5Xf1hfvpwNKugao7fMYWuHK3zJoKsGay9arf5H6v33B9osMW",
  "key1": "AV2kYopF3sZwiE6JanWppuhGtUadqGS3Zizfw2SMbv64suRzDeiXEbEt3PyoGrLcfYQdFoJ4aoNkoLP27SM2HWz",
  "key2": "3TtwEbXprKwijXF9cQEy2az9mSGTvZ9z84iWQYU7VXhYfcRcfsAjFd4aWkFVufvPaHimfkkPYiP4WxLS9Uy4Yw8L",
  "key3": "9HGPk8SrZCRY9Zpav3M9hexqs8tyCQJfJuWpSzNTJ81yTkpaQ4fbh2tHLfKmwwJxKuWjWz2d7Nv67zgeF1oe6Lt",
  "key4": "2sgQbV5gtNXw64prSQhzkkceNQJ4qvfABTg7ZDhRd7DyZi9E7Mtvg4BTFQDRch9WmtYuURasesrptr8Upk8u37Si",
  "key5": "5V6n42dT4UL9Zvwittshea5EwBkLSuTGoFYgGwfmdd7R3hN3LRVjR4MHYU6Be5iRoNsUNLxt5bAokTKyGjkgLehp",
  "key6": "h5fji7uwxkjkVE26pcpeUHW9hC5HtP5v2va13L8tqu9gkGWEGk4gM2rvAf3xUJ52RYHU4TnTkebVmj99ownSkKY",
  "key7": "pi1BPNS8swTVCCNVBEMq2uCmyVjza7McvqrEjRPs9cdjwYocQm7E8z6XdBQvxdVmMK6jKj3GNPdM2CnZQosmBFQ",
  "key8": "2zGoqhrJwNNBgbndFAPT6Za12RvQieyDC11fDiTNJDxfnwzd6HNkFxUx4yRVDV8KhCeSY5MjWQvuaoXJjawocaYS",
  "key9": "mbxo111j5Gfj62jdwVQ8QECrxHzyj7n1tCFnw5enD8Cz8PGLQubS7jxsaar15z9niYZLGqXdAeY8o1VNGJvoNrp",
  "key10": "2UpYsDR7Dkamqh7kbTiNg2F3n3Pbqvj2W52jbS5TP6LcPbu6dENi7zKHuKiUm1svJiajP2uv6takJePNryVgiuiw",
  "key11": "5fkUtcrQZWuEB2pjGHMDsAj2CycgtENzTu6mPhdAUZzGhTGyuoT2PuGqiqxYzsjTVPz5B6WtWpvs2JHLokGjhWPp",
  "key12": "RuM25oz3ACm8bhvQfkAh1SXZjfZhahKWJRwnouQLmkk7SemDdNos5EPfnBMqNAzBs95GQ3KHEgzrjrfcXZc6Ffc",
  "key13": "2xhad8EMZ1JxnVEkb68qvH6AzLiCmUsoyByHUZGt56YbqPzCZoVsz4mJwkwCFjTbvgK4q4efzvXBD6yDo7pq4xeJ",
  "key14": "2waEKaPku1fLjqKrZ2NEYsvzq7JLxq3PxT2UJ4XzC7R6APskKkXxJoHeFetsGJDEkUAGFPJ2WEJqSXnUJfMtpY9E",
  "key15": "5uBdns15HiDrq8AQjvX9FM7HFu7cnoThCrdmcVVbv1PsV1UoWQK1DaxAUF96XH9RqBihGasKeGVpHavKnqNMt4mP",
  "key16": "2W8nWiX9jqgbe3K6YwkV4GoCdDLNs2z3Er3Vg45o5NL81MNkuzc72jax4mMFNVGQfksQpRVswKeE83iopkxkytD6",
  "key17": "4XfLgT5bvzLBBTXuCT7SD1WNcagqncKHbQTFnoRdcjUAoUuB6UqKJMuiZbrJJuNt3gVdVzqpiQTcGgsgiwntxdQZ",
  "key18": "X7s3nN2CyHBpt9Lnzc4SBwMxbpZFSHu4qVYCzBMxSW29CfBhyext2bXfmhB4ZHQQ6c5NHeajEFQXi5Fm2sX3aTq",
  "key19": "2gg7rBxH5BCPf4LrgB8x63TXX7RWbRPPfEJA1TdphaNB6ioC4GCPXmGJHz41MZ6aENkDTcnr9DgxPCpofFpndNxj",
  "key20": "59t2cwXCUueQBUMuSGbkQWzFNPceNo2LT6sLr5E9q6ErFXJ4dTV5k51zEPua99g6Dxfexvm7AtjYxKrn6CvGnB9y",
  "key21": "3eE2HxgfLfaeDQQh6afYKZZXiVej2Zkz4grkaSsmLH3iih13jWwRczosYSdaJfAq4Pbc1eX1L7viDsvHeRpfJwrA",
  "key22": "gdW2TU9jLiPoUhxfRbhrgpLpjLuTQCxZBvbCEK6s96rRD4SyPdW6XiSCn53pDUbnhrx4qXZADKnB1WVoSQrvyHY",
  "key23": "5NmpiS8yYE73LBgYMbcSQaFPPyoxL2e9RAuikJn1zGi484ApVGhPzXQHAEtriMeNUYo9iRYNZimj2EoAdxdm2b75",
  "key24": "3pkv3zcZrsN5eK8uWdhFDUYYxE5v1AbKiVfuWwuP2yiSEiPjAQU7Q32Vd3BQTJCKjph4JQVbGsS25BcC5zFkJk5Q",
  "key25": "3T49oWYq4VxMzpkbxzw7dWEa58jrk7JFzHwohGS9VzSHM5CrP1nLsMjpCVbuspKSUcYYXyU7Z1iAgDHneM1i9PP",
  "key26": "3MMqR3ZMniQ9g98DMXRgQAwfYtxzYd3CTFh5ddM4WFXva9EW8p8gU3w8exioo7gM3hdAJ1EmMUqTJSZ68iQqTfur",
  "key27": "4GFZt4WzGu6D3FwBJPLxqR9F5KZzXRPh5GHSqzWtzAE3GyCDwjsTEa3xFyogtcNPWhhpidK9z55GTyPeG8mH1hsE",
  "key28": "ZyKBuHrHse8g2WKa4QJwQNbXxLAJCtt8TdrXJxWCveo5pHTihAMuffV4F3ySwcnNuhjsHTPWd14EZuyS4FEDVcn",
  "key29": "x8Y3uu3yVZLZgUXygjeNWpvuGPRZ8hSseafacw6ef6Z2GyCCJghJAtQTG7FJYNqGHwdBjppPebMdN8YKFJWWN1N",
  "key30": "ts2mDxKyHyQNodUym6XSJA31Pkwpsib9GFupowW3DkXLAZppswMHkszqDbdLfjdgV53EXH2GMdTUYKpakxEhcJK",
  "key31": "5cyqVfPQCm59unphhBwaNwR1shznFCFHr8gyzuUXzc4HRsZ4uBS4Co1pPGA96hr9wbC1WijjtTrzMq9vjvb6bbSm",
  "key32": "c98rQQxY5HjPNvHVZoB2eNj1ioNQ9PmMcahxAA3EDS8foXwkmwroVfTyyjNKQkBdqBAKYC9x5G4MXVBchwiLEDd",
  "key33": "4VdaS4zWPnXmDRbYFcqCJkdGEMzufhcXij97BygGm9udX1R2mYhr373LiZPetxY6eVkBxAKfsUpguqGk3LRiGphP",
  "key34": "5ELG7QdhnAJsN137sgdiPdZmVBDafgUMPYMnaEmzqKCEyMHghtWWFda7FEh7meNNdK1adTBpLnKvD6c6bqKXLMKp",
  "key35": "cidwn5bcmcLGMaCbPyPXVA3SiTZtRvCvYLmAXC8Eqy3Tuvh1eM4XVex7k7qgUgpJ4NFx12o9weqt7GS7BuEFTJ4",
  "key36": "5YZusDp1kfUaCEqXLaGoNDjfQfK5MRCTrC8Jwr9Pz6q2XiiU38nzKLdRo1x2Fiz49aLpRyQLBZb9u1sseDDhagtW",
  "key37": "5Y5avyLDYDKU9Y9UZJZEBbmdrCDjXtx1RbCpv8KweTF3XadrbxAc8zzpbxGaTZZfTzXzakCMXv2gzHrRr4toChCv",
  "key38": "2mLen4xVSjywXeeWDfJJqfubTRW2cspxR2tqGpPicWrzH4B7MEcEVUn8azkjAsGn2HTA4qwxPjdEWeFsCsev84UX",
  "key39": "31XF8iZLd43aKkgHWeLkBcevrH2bgUqhwYrtM29ToUrw2vXwUajEKcgGMEnGQwceAp5kLA17z4wph8U8WrTfvKyF",
  "key40": "jQ7tdrj1N5F7F385vtBCLKgk9oQ7k2y4jdMStacpZevHqHGHCVgcF3Msfxpe7h5eg7NC9tC9zXhNveUyWcMjRoU",
  "key41": "59ixqZArrQXnGaneJPgj4ukiwRjyhVcSQaqfz934P6rudqMBmdArRoPbcriPrpauhoi6AAntaKK5NtrWsJxEGcEW",
  "key42": "34mM7YBFMnVKAxsRWKWfbAUttqjvYZvP1TaP1QRezeddfTutg8fUDc9piy5jGLDLEivoBqDZ3VNzWnacMTazJrRo",
  "key43": "5UYd18f9ZC5Bk1EAF8aDsz4U8CeuTQYq1QCpiiQC2Dod2E4Sy4A8P1ud5F9JWyUS9MVrji92Mwk6kBHPqwrR5eSb",
  "key44": "2Pw711BwFvcKgfns3VQK1stDobAu4Tp7HyojTjiAXa42hbBgyaQRJqvHoqPmGgsSmXfy74QUcD6uzU94VzTrwzU2",
  "key45": "5gJqAzN3ZeJYfPGVLBKNVe7oyD1SZejFCXubKpepr2kKbiKLjP4DHqRg7xqD8mRa9dy7fr4Nz8uzD6UN34q31pC8",
  "key46": "2MmABGxPJoNxvYGqm3gJrfz6t9FJQhBHivcHPXksZuHC4mamU7mJaux5dZ7XVMjveS1UKYxUVCXkJAiBs4oa1m5C"
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
