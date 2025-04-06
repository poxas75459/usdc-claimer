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
    "2DgoxBqYJcKyGLPwxELKxLtPvFhALdPF6xVpcnsfqWHoA18GPp1iYH9Awc2teS2ik25nZ7uQbeDBccYE4QpBxz1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FwUetmeFDYtWGRFKKXsWDhtW3WzbPR1mDsueqvrbY53y5jL3rtRNotJYEWh2srhFoePZ9hscS8KeFBMMm5VDFca",
  "key1": "68HbwA8Qafv3VPSANH55jeobY3bZhDL2YnPNKiqa1qVM24L4zaaTMSfHexsChHHJ1GRu9hmQBMqJNRL8rk8iwrZ",
  "key2": "4hEeJZS8EiZ82VNuX6R1RvMdc5MUFBK6fTXibYW4t6hNSRaWRPc1jUb68gKUhR8abCeSS3nt8oGu2E969mjFiabd",
  "key3": "2wQoALieANuMX8SCQjuePozMCV3FLhxkZFdLdTDCgo1Ssprt9Rs8jaix7M33LcT8VEfnCdenX6HeNHVBr6xrQpaP",
  "key4": "2iwePqFZ1wxgmdiRBZiF5zi3mX5xNtGZXhgNk3o18PTpF9NDG2ee1oWMDiS5mdPVYGtTGJmxpoHB4nJ5pABrEZQw",
  "key5": "47ePC3WNbGTNx8wGUF5sQrZ9LJ8h6pbWTVEUi18CnExBuQvBZMJVBGwZbZh8KpgNWFRLYsNZQtRYZWqux5gDLUCH",
  "key6": "5ZSKPYrBqx9GWyeccbJpb1VvnZFZMWgcQn3Aw1FfanBFA9KM5EDhXzbjCPGNGwpS5i15i7wnTzSESGm8DaSF5ZMe",
  "key7": "3FPddNfKaHjTNgbqWkAWL5tQCWWf1QnMoMyYKmbsvgpaPbpEhuczsmXsgWzagfq8216Rw9Vpaga8rP5ifXvKzRfQ",
  "key8": "3Nvyr1rBf4TcZWstY8R8yfWeKf4RfHWuHWJ7VUjS6A3yyTTCYi4t3bFa94dHgTrDDSrR4mNfvML2fWARxn5SFz8V",
  "key9": "3Q1awan19qUaE13hQTSTxYd3CZdnoFoEzqP3V7JWcMTYUBAuQ4nNQfHEici3WtAtdSEdDtSYB3pdjnc6EDBoWGEj",
  "key10": "5zn9Faws7vnbrJ6XTLAaFuxSTVCzFPm6N43CpWqi1EyRpCfPgYzA7TU37F13YUzgznikuwFizebeWjdW3nfWCjGX",
  "key11": "4msoqGiWNgLN4UKXNtrH5Sr7KUnA2HTYswE3EbpX6Et1ax5pbj39ryJqhjtWvwjpwab7sXHuoPUfAZsN1rFRhrQL",
  "key12": "3awVwzoQyLNNWHjzbDzAioFKzDdWZDjbWFKnpV3XbeNUyBsgNwdk8awn6pcqapqFh8Bc39JdqoC6dSnR1nAFaxjQ",
  "key13": "45xacraX3QeJGVhqSwAzvb74PNSMLBZZHVQhokQnxMHZ1bS8PGNX83zcRbpCx25hQftSzwqVyb1zXcKkjX5n8KL8",
  "key14": "4Nu6metR2HmqzLfCrqbjh5eUYR2guxKBQ5U5cTmSkU1TLHZdshEthCXtYgKNHjx5UwFM7Zjfx1KpF7t6Zpxi7wVU",
  "key15": "2LtM3e3tETgwMUtYp1r2SpnjLVVs1Ttqf9qnqEcHLBFX7UFnQCcrzysz5TPuJLB96WsirYRTgUYkD6H2ETV7Myhg",
  "key16": "4KQprPJPeVqwYF9f8Qs5FjFEyHbdUCPwXMate6i42gfejn2qU433fnTm4RGbZYBL7AZFEC1DSgicEV9jqKLhbXyH",
  "key17": "2LtSoP7Az5k37LXsgJ149VkncGoWftsjK2gMPBGpDoGr7UdVfC3xgf94ReQUCsR8ZP8kAd6u4p6y7AFbMys3euJo",
  "key18": "5Qm8nfa1p3HJhgfvE86uMtTdAkyztQVKW3fTjZtjbf82PeuW9afGMMxAPD6BsGeDZVPo1vWXnkU3Ee23dLbFHXy2",
  "key19": "35kx6RHmU722bPp1v6pimYn7r571xYyZy3VF6jwCWAa3Up6ZtRSkjTg6TJemuxknD7V6mKcNt6XgyXCbsSzGcBD1",
  "key20": "pFgcp6gbF9kuRuHCoRXkGcsRnLzqBsaUTApK7srrw3gtdv4UDkr4BzqLAYVLVNRPUp7e6ibtNEN5ABgaPj34tUb",
  "key21": "3eUDKyyVCsPdVdWzNBW2SCTo6q7srUrimo8ZcCRTFoDnia4cncYjeDWpNSmkXP4FXEkeH4sSY2eJyP58xurXVpya",
  "key22": "A1ShSnhyuoC6dZunSHx77ADPhNvFoJsUcevYLkazE4cNFThnk95pTHgS5PMov27tJmwut3CvELdGt8J6EQu5Rqc",
  "key23": "3dCGyFPagwqRuMTE7aHjgZK3wUYFk9YYBPr4b7MLG1E7BkbizE7k6w8MX59BrUE3XLf1LY3aN8J66KHL6hD4u9XG",
  "key24": "4zUUw4QUm1GdRkjhaFnj9KwLWRQG4U4rYR6YfQoja1KKwQYhkLSw3J2aabSkWpUkKfzvaE6ZjcKYTRDVZRAJ8K7i",
  "key25": "4BPW34KCNqYCsY8XgJNeZmGpbtKYjgfDDMwdVMYeStXg5a2XAiTpTSZSPD2hrGQ7VppbmgBSXe39UvsoZvjrFYsP",
  "key26": "5SHg475Z3nMbz2mTCExquQX44A2RXKCsWb9p6vzs24shGVrXaJw9Uc8LKfDUGgyPbEQ1sxJX3M5EpyAn1pdRbPfK",
  "key27": "2M3F2mosHh9DeQFn2VDqjnJsjLeRgZ4xjsbGnAPvkesifW2uVZ1mqbmTgpw8aYDjZFruA1gYk5DTGmc4nnQ5TXJK",
  "key28": "3btCeK5DFt2WwXR8pEQPqCGUP3eGGguH2rts5Cd4mBEnWyFyho2fA4bcFg2BtmD32hyiYJC2Tk6ZwwjTzWAuLCWa",
  "key29": "3NFzL1YVmDq46qjvtX12Fu8XWJ8BQ88gCMtEpimfsu9LrEKELjous9ioDHhETDCeqN8cGEQ7HrvE6hkE35CBnLvY",
  "key30": "3BqTMVqVghRSACCN94jSenniUqvLhW2GJuiAuYmV62Nwj99DhAsWXaiiypLH4rVCBjfaoHuP2VfrF9L3cvskv8aT",
  "key31": "2TYm2Z9wPXwECfQHDFBsNzA21ZetN4H1KP8tkM2Qrcn23L3viSefjjUcz5UUL6QZGm76CjZh6LQPuq53AmJuNiWc",
  "key32": "4e4S47BRYMpgjWC6yM2NdZmAy9tNpGe8TXBV6tnEawfUsHrbvL2bmBmHz9gz6NguY2MDvQGbQrn7u5LBRsyuewWi",
  "key33": "4xKP1iwwh2W5wwfciNKncqFocuVpCSWsKxj4wegb2nXhCCZk1KBtN9x18iuukUAidEbcvdzyNXrcuaauGemE5JpN",
  "key34": "5g7KxrGY3NT41q6FHvoN8e1kCAvTCTaGpqRwY5sS9rU5aQCWWRU3QYx5UJt4Mq1d5wzBzxW9uLrT3YFc8moJfGz7",
  "key35": "4HeWWeFNAZsRJNTTiFmmAwtQUuhCwvKYNDrAqAkGENafHTnbVoTS2bzrMtsvcfQm15DEQGSShpHdD9dUwozwdSm1",
  "key36": "3d3vKdA4as55wKbMUDsmHicNckRxeL3mrkoP2W3xunrZvQfnCsJmYA2gtV9VLGSFmVUPBykEDLJ2NFKHGDDCAHN9",
  "key37": "5ngje8ePvJPTA5HztVoi13rwjWYHzJRcxyyjUtDpVstvXhyZQWnY9xCP4Ef1HoSBG2p5XYHtZig2ybxDups9aRJs",
  "key38": "5J942iAbBxH3ua3b9cVX1rACBQEhpbvaDEz3xduDK2QFTa4Zqf92K1JGz5SKiRmBXzQDbfSXZc5Faj3YLavphh4e",
  "key39": "2oxZtWudB7ernC9SxM4ug7mM5ArbSFPNt2cVKksyKxEhkUVVXuqjVRtE7sjhTCpH3uZ5MgZ6tJr52mvcPQVREcCv",
  "key40": "2NMkYjANgx29J1nJRvaVLjdvtN7c315935nDSmtF9FEhySrdKghXpa894MNWp4VN3b2BnAwBCyaC51AS2TZy6ned"
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
