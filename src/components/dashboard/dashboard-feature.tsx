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
    "3N5RwWUydT2DRQBHVLB5u3vynYuCjnwyzPLDybk19wsokpqLCPia9LHHEMTXfXZm2cLs2kUmKaK4krxNsH4ZYJj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oNMpDHMCCwxorM5iZst3vMEm55wpDcQh8KJFx5kth83Tv8kTCRqPqG4Jh8uFS9F5Wv6fMDhJMQZuQcoJzCC7KUo",
  "key1": "4yYYEJJEuXfRpsWutMZKa48Kc28FpioyvxgHMQpbBYdBjEsEexEnx4VeLxCXvehNFktvQdTRnrRW2tEwS94qcSbs",
  "key2": "4TLvvYRRsc4QasnhR1gFso7dt8uMZhcDA5czqhHE73BMaUQfpKWrAKiAZZh9PPZyRNLxirxWq7cAgxrsYLRJ6Rwy",
  "key3": "5dagK79LiBUhBhshEaKmWSURXdvTi1kGvwAMp523TkocT8H6JMspK88dQWJ9QZKZTnU4jZqhxR9bPwWjgtymkyEK",
  "key4": "4jRkgeFPYVcPyzbx7UdYVRuqaLe2fRmke3mFLA4Q3f58sTHGjJdruQXhGUt9EFinSMp6iVh6xKFFq57rQ3EsTZjp",
  "key5": "4LombVNqm3zJaej8f4yu8y4RP425GTQLZ2dnkNcaRkV3cPNo5GCUVokgrEF8YYYCvdPsX1Jx79Mey92XYABmwFfB",
  "key6": "4w4c8ii8MaYhx1d9fjh1b2DhE3sZerWKuqXquJnKXVdH2vD732yigtorim3dxDwZcBq7qDGpCmhHBaLJvatcNRUY",
  "key7": "2gqUWt16MQXT3bLSXwKkup4e9jwHoxWSSHqgBYQQsPvHeyFw4XcxTunBi9v1JpMSwogMB3yq5vftzzdJRrV9vp5J",
  "key8": "5wzDsSg9GJmWiRTWL6b6DcmUn7SwTrK3vzwAGM5ePLHvYnTR5DSn5yUoYx9A2EBeinub2sdAqbKQcaKTsXr8c7i6",
  "key9": "rd5PCmWTgv5Hmy3BU5fNEUWD93vEDGpkYGCYNaFZMGriEL4dCkQFGRp7wQUVKzHjp1GR8vA5STZsCbAhRuWVo2L",
  "key10": "BZJ6U47JBydgqvKZjqLEw4ArJVAoWnuonjcyxx66i31BPP43DrPLmBh49ZDTj3CdrmcNa7eEyy7ktBhkagN5QKR",
  "key11": "4eFCWY6RWevoguU4u8BdGSD8reu4e7R5MHgTdkhcQgmF8e4QNaPyfxKBQp4fqFuERb7iUo9E8dxUueknJxkQKc58",
  "key12": "5sCNX3iYPSS7UbUHCGgRGKDrs2ArNgQF2AFQXHhfddgcVMQtKbYGCux2pzUnYFL3SyRQA5HHAwBLTTb5BV8pDDfq",
  "key13": "4U9pyBfQaTsrbioTT7TUBR3rRHhABC6DMk7HuMqo4bTFtasyKGKaWq4bm8H6puWTzrjmSfL9mcbaELC4thwSAjaJ",
  "key14": "YM7vTtRqtzX1hPgEXw3ug7n9GBgCd7ujMmVWu2pFEcaJLy6dNQFzrbWtq3Ph8Ww36j2uGdfcE9P6NEfBpod9SdX",
  "key15": "F8tW1gWfGcGqqQBWU49F8sGfFv1DY8Psv2p6jjbXrtmTKXycN9Q2tbcKKTV8i7qXUB2Ne4sMMENERqrmCV2niSr",
  "key16": "5tWsr2sHrJoWaiaUNUbmKHd5UrCThyEiD8E9ZCBTazHWvEfCGcw9dELt7Ef567ZwtDJ7sKJi6nnfXsPJrKz9uPMy",
  "key17": "3CSJzYBw9Yd7QBfJmEr7Dk9gqnxPZ4LHzF44vJGFL8r2LrCaBseEyQZt8MyE2EUxPBhNUk91ovTF2rS17gCyr5iX",
  "key18": "5svGoaymAo3wRJwUL3RKHTWcii1NLCDoSHpk94AXS9S2GqUVVvQiLhjonrfZJC448dwo7qewKq6ZPViaAZhvnuAF",
  "key19": "4fo5B3hHphwNKkYo9jVuEXPj3dHdVSRm47f1cWh9b7Gy73EZXXw1pRG22tDDkNRVjMSvjXHtZmPBoaQzCss9qeeW",
  "key20": "bUcrLZ2zgDkshvZiehVdJRht4o817BeERWAF4r4vKKuxk1E87j8ixEiWtzCEm1UX3nt7CBsFEqvatEZJer79Vw6",
  "key21": "43EBoZTr2m7TkY3Eb5B5tzTFJos13SD68MJ7wfHGoaaVX9HRrcxqGcgDphZQNmx425U2dmrKzrvUYuzn73ZovoJA",
  "key22": "NjbPr88KddrnqGaJA4LrhdcMFoby2vkWRa2Wjab3AUZkH9gxEt9ugd66rDpoTzNoZoQ27j9hp8GxRUyctKhmrDJ",
  "key23": "LUhFQHfWnMi9XEdRp4pSp8WwFJ7qgjF8DGTHyDU17o722pUrtwb51HRVeZhSHsprdHEsgo3gMz1PjwmM5xt82gG",
  "key24": "4j8vJ7hbmq9ZF7eGLhyGbg8C7K4XxX3TJ2UD5yp84HPMraALNfAGEMMGdHosoNXq4AHw3Gf15XZuez3vzaXWktB8",
  "key25": "46KvrvE7tWCbTEkvVA64AjspyVSci5mYYF9CnmfjMtyqsHhatGPV1P45smBiJyNcAGhYMzWLm2hSCWnQTMPgCpij",
  "key26": "59bv7wmmCgWkeqvLV272Jf8FvZUdmnjDfobeay5diaBFxZjPZAmzBNZKNxStUJforsbQxXSdQnWqZvmTaPW8gNLK",
  "key27": "2zb5GRJG1QV3GiZV2D566PTunXwkz1emrDBzxdJsQzcS2vfrju512X17AEWZBDh4jzEWb3Tjo7TNuL7xHWBvqP63",
  "key28": "5nT44Qu6Zt6wNKWwt4iVkXD66WrADVNyieYvDSM7iGmbwk9jQWUyxzCMWaUGSZP5HutHbZhgjdiZY8TXph4TWPAH",
  "key29": "ayavRrDYW9BvzUjvA3jQ22pvM7BAcMsFiHdqtJH4wHiPH3sa97ayzvS8Et2WCrn8rrmpFHqcmH6p4XqQs3AQHCc",
  "key30": "5w3HX6cLubjUbnFrkmvsTGAR6DWyqskMLDcFMxJtMaaH52USWuc7vucHc56PyCU73NurADQCtbD3ipn8LCiTRBNm",
  "key31": "qkj7hGBYVm5q5V5Xs3yQ3W4me1LESiY3Nk9xsHqeDaS5qkGssfX5kMqWNhnavCwmaw9GsPEpB73cf81a2Rtcx7i",
  "key32": "4MpG5rshUytY9TUvpj7hht2TPSTFH4xyXo8GaYbz7VqKuPNW9Wri2bbXRXxJ2ZoBmk1MCauJDtMfNAhQfwFRbJBy",
  "key33": "Who1qQf4ZXCibuj1uVxtVDJYu1cTrbDAoakgfHoig4CFwNnwUTbSJVXpkVrhVfiVEDuUdKmq31R1ddZJGDTUdae",
  "key34": "3KuSRDcccs6Y7JGEi9kBQjejXvRkYNU77eR5brxemyeC9EcBydLV45pfLd56RciC1LqDLvs7Phr86CWLx6xGpJcx"
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
