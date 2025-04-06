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
    "4VUowCUqzvnFAoTnYEBurtPhE8YzdDxFhV45n4PQpazFif6CUyrah82P1k9JaMbci4j9C73fb2HZ2uTsNYWP1AmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "prCL3Yw15VHfhhYHt3Zgak5m9nWegMAbruFxvpqEv6uoPGcY4P6LsQcx2bJLqPFS3uBTJfPTYnaG5sz2MrSXBkr",
  "key1": "3tcSeG45XQvmk5GEdqWLPCXgcVXZ9gGwM4Xrp2xCQGNYvqRLtt6y1koVmGMUU46Xu5aGVCwBSPZjPRCCVyjp3Nhk",
  "key2": "3Wk84pUiDXERjShS2Z9Z8qjQLeuQBdzajqFfvdfRxHGn1VRun8kDFmvPTuVyBw6WHxZCMnZod4rdTa2ryTpWhXZi",
  "key3": "3qx8wMj1HuqbHV3fLYaJvE1A5kKES72tuGSRF9xAn9yvXzQzHAD4Nx9NfWC4ZDXH7hEHJK1kt9976kqQvQhHYjMe",
  "key4": "2WyRKkDGvAB2bgmjCkq561mbmmiVt5VkMpXtUhvsgzxMpSUKMTbvKtVCLJoAiWt8FcfaUkVz4Rf5AgFtx3bVDcud",
  "key5": "2s314fHH2CsmdM8iyVxLNw2TTSTR4aYBaLAx7TsZDzBL5QVLDr3xUNCuaEo2pA9LsULsqJWX78gR3EDJttXGMVLm",
  "key6": "2qksJE9HhDQbqrU6NWdv1NFFvaeHsstVgg9xwthMen6FDXPzi4xnXT3EENmN7dJaGCGe78TaocwjKpALTGf5eA1D",
  "key7": "2QK13G1ALDkvxAD6Z8vcyNqzRU9CHnv4nYGdRRXrrYMggwULwYXwsso3curdtsEd77dLAEXgHRGwtbQhmN82ZCuS",
  "key8": "2GmF7NyrTnbH54pifquwitMgNvQEmdjc3agRvvoUQMWbXaHwVzNUGB6spGcU8TbGZ2cJcFLgGZjR3wUJVVcmNwZo",
  "key9": "345PfMuLWnb1ctsf1EFDtBKAY5GtMgBMscbL3ASEUfxurrNc394ASNTTtpJ9j4brsumuXXbEUpTe8RcpBYN3nYUP",
  "key10": "5ZfukCB8MGrrm79zNjw4VX63PFWPvUSJogW9vcTCcsgb8uNWMzVrD35oqtb9pDtSf136n6pMd4TzLwykc6qsemq9",
  "key11": "5Lfmss1KhG4W8D3LENDTBwo2MmShrNR8sYYmB32QYTvY6doWNazHnBASMuaN5KoAwMcUN5Gvv6SNfnfzoAj3giV3",
  "key12": "3V6nuTVPvAa2gWx3peWQK6k6xab3TZvahk7f8skdukrBMzkpNUoQAmBd6STrxcgU88RKCZy8kzTyUJH91mAgqXoS",
  "key13": "4axVLbKtmdzwD3PShbjzZ5giWwzW6tFqbtGGGWXjtT9v2gezwcFw8vh2ywKsZEStAN5FoZGmJ3kGgrxzDcVvoFQ6",
  "key14": "3X4qBxTiDunBALJ3wBervPn8aCbve4cER1hBufiEqPopJmEqx615mGUUApc1o3Dgpao37oYNL7L43r18SHrCJtSj",
  "key15": "5oP73C1EZVd1w7f1HJWCVE8h3KLR9TikUBAj2sqgUQXJ7Qj6A784g4Yvn46Q2GchZaG1Y8JvpHkVZoWMpj5rtM3g",
  "key16": "mUQgBAYHyJ1tQPi46QbJmFYvEdGSkAFKdxTox6eGsqz4bAHnxowNBTj6axb55gk5yBBcK5rG6bS8EKHSA9SDhu7",
  "key17": "448VYhff8mW51YTLbdLRuP9NropubqnT2YFt643RUY9FCWJRkDp14YR3cJwaMMQwqAhEqdF1oWbtwvnRC8vm9XJw",
  "key18": "4MNPbccLSMJuoU6LdKpiSEqg4DQJQipJ6CxKsPaA4UAGU1crtsPJx4LDUGABSXMunS9C7vb8Q8vg6NPFY9WA4DVu",
  "key19": "3yZF9CVif3cW53BaWwMQrWJDUwPJAr5Cko2KMXR2CRhVYywDR1VWP1Kn3Zn2cok2J5qFk2DJdzKQwgKhW5Lwho7u",
  "key20": "4S5caNEpyrLUySPgiiUuM5AyhH8NuLiktm1w4ZKSf3YW3V5zLmQiZFPSGCvXcnAgAEWnmJv4UPoujKZ8XYwuZDqx",
  "key21": "54Z5pF6cEAcPmyvLkTRD4YV4xQSsUmq83oTEPvLcELRpiLLs88RD4swzFwNDbJKf1Mvs1qTvbaVinkdpdXUy9t1a",
  "key22": "5fqjGpURe2P1r2pJ7RfAcdaF8VYTFykuQpSEVFYK7FKXWLDzP62c9HZKBmWT4mDN6kopevNSU7McsLBanjur5GFY",
  "key23": "2E3BPsaX2QGYrxbW1s8wPxphroVEfAUy1baQRCRKMnWHCSzxU1Y3qqaH9xZNb8ehkYjN5nUJaYGvi46Qbu65GH4x",
  "key24": "4L6RrcHWizSSK1bYdPa5HSoqsp7w7Ubsqwf8j5DcWkXgPGFR83ugej4E6fHipqnog8uZm9azjZLqG6UYEhQAZrNF",
  "key25": "2ZjaQ1yLYnGj1x1QXBsfci2sknF4jb2X7k65YShgjC41amgmdi3oQVFihBW2cB38vRAeRmcwr1ZmnmsgRBFzxPrN",
  "key26": "27yvx99cvcF7W2fjGJ788vNpQDGyNkoV5CjEugugKL6ZrHKoPfq3QmriYtp2bJxt3zHE9N9wkutxi8JryCezkEfH",
  "key27": "41Y3MSqTMUBvvNiuHC5iQJoGdjkTSGgv62vCLozwnXwkyqTyeq1gNFVv6d6tCzvzP3iMQqxQuQNj8ztHN5WAT5h4",
  "key28": "NC9zDYwRuRk8R23dV8zznYVoFWEjsiwWcDahvqZT8QaVn8iTJieEivMZ9z2EW5KyoWG26Fvz56gLzkHTqWinmtj",
  "key29": "3VamgjMoo4BYcoTGuNEiMtiYtPDWDkys1svsncS2CcxjKkUePvLh5RVM3Sh6PHFYarMZZGJmLSDfQY8gc9VtS11x",
  "key30": "4t4um8bD85EJfmyiiXJCktCcZLwmPELDowyw6a179nE9QCPM2eaPDrphauffofcSwgr1MvBrRuLoL29ScvkQwcWT",
  "key31": "29c1DQjy2JXVu4n3jnodn1iyAMbvhpgV7CLhCs3yDDiu3xhfpdWZMVoGFRkJNnAbMAonM4gUf5eLU75RP1nsbYUj",
  "key32": "5BFz4xKXcgXbtX66ZMbskzM7sAmGsxE5tDbEHqVHFdPtZ2K1tESteMoAcp4g2KrN9Th1AxsT6aWVM5f7vxSHEtso",
  "key33": "3gAaFFBVPTSXV9P7qoYYt5Ckm1LWxsBaXgiw7uhbUaYFNeySCfJ5pbkKUdpt1kzsvhmfzbPw4PgmRdHatksuhMyu",
  "key34": "BW1rx5BijGJQkkFQ9fqgFQXjwcnBJYzMenyf1X6QQUmUWo8bgWJV24dZpS9LG7dyQQkSxgsrfdkXb65m57imKuZ",
  "key35": "xWwpZR2HPJfnn3cfyfUeyBe6TMzs1hfqjWiH1kvMhXBQDA6dQjbxE1EV2ShTyCqZkE1wZLmRdAEb5Kj7n2wDRF3",
  "key36": "4jV6RShtukiDsduMYvfTB1LXQwWW74AFv8VJnzcKRRs1JTiL6SYapugNaLM4xu4kJvQmSgRUeLKVXDc1XYQRXurL",
  "key37": "5oeSPQ4YMTCDDLEpDwSCZrt6oaoNHYr6ScRQotntjPWV3QKUgSTUJYMFwYCaoBGMzWKdjLWf5zxM7SdQFRvTmLs4",
  "key38": "3mYP822D37Mj2fpB1AJMe1p8BBcoNmb6bPCt9b6evGpGmpeg8CVCduX9U5amiLeopqz6FEgcahkdqSsxTkSCDPkK",
  "key39": "LxR9tcFj2d8eJcXw3vyToRdPFvhKMKtPXMk68gDih9qcQH9i7s7EVDq6mHVME3ykoDAmJumqjAJwm4BbEswUBUD",
  "key40": "3uUP2ogXZpajn4jsGyCZgQrN4mrHm4C9YLTBLVCSUnboEwEFmy5ZVHqDE2ckb4S2k6kECdfHyhgLqpmaF8YmvH7H",
  "key41": "58JsPVKFyC9s5RqLec4bGSpP3wvRsTP6YxhZ1WftJcxXcK5mbMUiT3JLBztXLrsE194wUZmLriEnHjRrXgP3CGhm",
  "key42": "4e9BSKyEAeXpqE6VA2oSbNpEmJYJMATkfvU4inEqspBuMk8LTiVrzskaCzwuZMkb2dAvv6X9bqE5dKqkc85Y738a",
  "key43": "3rEvNBQGtZRB91zqCBYiAC8qr3FPSz93FzmXjUmdN26iKUXvCp7kgQoFGsUVLBkzB5VWV3trQ7YtPwAN2sPdQcEk",
  "key44": "5afKYCJASwNXRfKwXDxm8jmUVhZwSSGhaeLGheme1gSLXAQZD8DPzozaxgRFVBtGDtKC4xvKH9dLax5YgyuLRgeJ",
  "key45": "S1285EkuYg69LDURUAo4nsqFc9bKUfXHQw1QqXcUJ5Tcv4GkrKBMs4GGqj8tUyEkzzfHwCV5JxdAEd2TaqpUgvg",
  "key46": "5VCfeGuXAYmtZbRVMtnympoQAH52wsPmp3gYkMuLbkikKLCpD3dxca9dNRdUax5YSJjm4JPhhLGibDD2f3T6U24n"
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
