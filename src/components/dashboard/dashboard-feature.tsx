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
    "2cPbqApfpMvMFsNcWNUEZRPsZmcJ3cbXiCaqhxLRCe2p9VbvaznzJPhLrT8aMKCA4s34HYBgSn3Gi3FmJ61ahJr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BzWf7iuwPm2b1AmqMoJTEHiBy1LuB7QBbXkFtrVkoBqHMzhyQR6eXAXYyKDmwCmASDgJQ3SwRkb2DG8ZavJkLty",
  "key1": "52NtHVfmqjsFkuFbajuSjbis7jHuvqe3ALHxqBGAgdzT128Y1qzBYqomCheX6EkqDPS5yDGReE8fuifqSCjsuL7T",
  "key2": "2DW6kyVt3ka8YgSyFcLBJ2qJe52TnojAv1uMqzvuB41TMjmTs1XTR6uuWHcAq5smkZVPXdY5MrNcN2BB8fD4VE2H",
  "key3": "2VwJtERKMJ74sD6z76u3MXm6vvzKR6QmcPTaQg6ciTak3TNsUVKsAMjatnAn5LknTY3EK9cVYGZJo4MQcidcyCwx",
  "key4": "tj7ZFDcgorjcdWofee6mV7AJA3qqdxPPWLdj3Xwfbpz4UCZqiLgT78qBBinnLogZv5hg6K9mVtzzCJ71Agx3Hsy",
  "key5": "4kwQKLtiHZtLmiLA8pNgbjzqA7eDcgTQyuwaRTbD54gg5wtakKnFupRFV2LLqHyw1LteQzPnu8PfR3ef239cpLQf",
  "key6": "2DtYbjWT4J8fPRBYRgQG94uu2GaCM8yHt9QGpsDMyu81SQgrHwm88Rk7rtrdP9dMQiNotzw8Lqm7kbfLJyu5xarz",
  "key7": "53QvcC8KjvmNUgJHvFtfw9gYPCYTn6Vzy8MJEmuod7QMtMvQMpgT1E8sQ7C243Eo5Lx82cqXTFcZzhSCYsnzo3jY",
  "key8": "cVos8VKMymrVz6drpDnLDxhja5VP8MseP8SrgM1Cmkidd1bMFRnyz8M4xybpTBBDX9NNzv19tQBETPxT8VJGYrA",
  "key9": "5MW7N2cmKBUT6jEEfCAXpyuRSzeM1RXBnoHEUgjqWQGfBwCN6NWDTUpT535r6PvwUzsyiTQJ3Z9Gvv1fR6bv1yJ9",
  "key10": "4vw7q7j2EDGCG5rKXE6oe1Kx7NWku3v8t3hShhNgg4PsvUnu1vt5UouxW71YDBciLhxwzefeWgCt5HvRuHdbmJfX",
  "key11": "FfWNqfgarhitpBhT1Gp4GA9pUE9bbRmbA4T4iSSYq4A1W1P8Cvk6LMrPtCMba5BZ4Ni7prKifeidBdWv4H3n6Gm",
  "key12": "23L9uP72BEZ5cyqeP5gnBrs4m1TXRiXpxi7X1rQ6ZzVLhPA5464hwxjj9eeq4qG1K8BEpEHzbkDqo3PY9CKQVB6E",
  "key13": "23Pr9uQ26QUAeKhtDJUZ1SMBuGE356XiPiS3eYJ27ZhEyQS7EUKuh7tX3r8mzvYc1Aw95tjV6QNpkuJcityRPSoY",
  "key14": "2e1TPfa6JiVLkt3jTrhbbYrcYcZS8zfyw4KykcXgw3jX4cSXCRapKrsLKsFUwEMkLogsoEYWYj6xtH7P8f3DYG69",
  "key15": "Zt1WfPR9jD2bRG3boyUZRwxt3ebjMk3g4H2kCxX7byEwAYDpYjB2JPo5VPBSFHodW3MvNZk4oiQhFzudtdHaTxQ",
  "key16": "D3MEUvtyCc97RXDDjyVJSqE5sg3HoFrByL44PDYiQZgo3KKV3LBg8daVNJVmDUgKBohMoK6xwfmavLUM8zhJcCi",
  "key17": "63YUNafLZtM3gnAtXrxPbqV1cKcP5f94qM3PWqAX3xrkFx5KitaT5BbjUYrUd1PEkSMHu2qM2XdBPkvmHSKbv6Le",
  "key18": "21YpaJRMyow1Z1dUtWsMov8KMn4TeykDmojYaMLpEiVypaXvqqb3j4CXBr2PwrMyhdApBwa3FkX9svZ7NqqqkLE1",
  "key19": "xDpmwxXYK73c2e2yKYXE5seBvYHHGZB8T4NBnoWjLZYYTL3oHo6n5mfqpszha4Q6HQTSiWWNgdDKPWZ5vNuzVxC",
  "key20": "36HmNKmtaVnmBrdRqHLG1fJb7hYHvAgks2gRH8tqaf7ikzs5Ju5x3ddD9Vx3shFciCiZsHctpaFLyZKBHh8EFEoR",
  "key21": "57w1uEjkGrXvfuSNfeVsucMqMwEWPuTdDoeRYQ5UGgbeg8XvhYzuGdfy4sMQb5tE71MbQVVpokCeddGLf4XeK84w",
  "key22": "4hp7hF4zFQyM2F5NVdU1QenJTn2MQXeHmsQ9xaupzAmgySXRa7dPNLjRjQpgSWQ1yYjm1yU6CsiUeDWindZqCBgd",
  "key23": "2pMyctrsVZXSvrpMLNFaPNaxuVWAejbMY1vVuqBeCQrbjjZ1xuCTAy5883ekRdHA7HT4qBmh64JPqs6qKEGxNoE1",
  "key24": "4mDCMHvxb7Hqfq6vWCABf4hF1DhfUerUiRULfLYHVcX82NwU1M1388xEs74TkJCFMod45qNNTpLdtwcrgiUiJzqp",
  "key25": "2GAAUtMoV3bu7jqBBznNupnhAWWF9AkSosHppvXBxeRRsvYA9ouJDQR7H8s1ZPWSFAwcTRFaTUcX1y9iuR39HTKy",
  "key26": "2qyQ7XT1Gy86QmJ6GZbQLt8pNtiCxAJxjyqjVp1JyyR3W72PzNRPFSJHEwZjXJxD5W5ZdDPDTuNgThxnuxr3Pnxy",
  "key27": "53LYbGRWA8JJSU1bDRbJ8PuWK4tqWiUXJreFNXVdbupNGdRF6pZEwFcdHVnSZkMtajgyYwouJ5zfuJ9wf74ooLwn",
  "key28": "4rmHERwU7BM1Jf3qdJSQHHb4W8DxZsL8gzj6fq9h5dCo3g7wUwrt16aRvpysg3iy6RkEzfFxV6hXQmusvBWxGgVg",
  "key29": "2HCvGWYu4yVTFH357JohRZDeWPo7eYxuFdDern6vdBDiPiTu223DjxWTGwqAVWCcGDSK5twdg3BfkXvuVXBd4PRf",
  "key30": "9X4vrHrtfkgwBXMn2nE5SXQYttWqCrUHGiHhRuvwzCLDayUbJXvj4VkNt4eCvqaEVnbP5s3C2REqDFNha81CTve",
  "key31": "4pniqEahTfy2H1wbGsEETM23de6MuFBeRBt4uYRwEyjgyLQxbeDXoYF2qG8QcR2Ada2okCdmNAuT2ZviNN2grRFi",
  "key32": "2V6R1tHQrVctwe1C3X4dmVqzd7au4KVNXPxz5GrmMUFCzSm13JHxSuLj2eGott2bWs3YPnjCiZr5KbAHMLiwaM4o",
  "key33": "5uzdCnrh2MycjovD1NE4wV2vpryd7x9WSHungLBq6oTfd1T71n9NEEXPyMV72o9T2jruacKa6eFAmArBCJomoZiM",
  "key34": "2CD2kUYNjeBCo2FFia3tj5L4cdf6ZRPXhNco2FPUSmnaoqHQhca1qpWF9bVsNJj8xa9Fc2585gZSPqhaa8nsK4m8"
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
