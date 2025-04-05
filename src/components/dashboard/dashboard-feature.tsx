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
    "5AHhApn7FryTUfqRFPC84REhngWF3LZYFTrjFjn3zRixHjCLCmx1sy4qh8WefUsES9wpAUKbLpX3UDt44gsGVCQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X5og8nhtp2gb2WPZPhg1vFQgfWiHE1VVBzRvYe4Bnx1xsuoYKBnoXAEeTHpd2ThupdHwZXqaeJr7vJBSVHcvkTP",
  "key1": "3VhYhipjHcwvKa1G21VMXamyJkxrRbyC2SKndmSewVcoxwwb3Z4s9HkfXmEKqeXroSgVxCkNuvoViEVpQeT52XTL",
  "key2": "27q4x91Xu3sqArKodJWNDXmLpprbbkCWgnpzcWAggkKv2bUeCmCdNBb475CxVdaF2yP18iLVdRrxinMMyv7yDs6P",
  "key3": "3pyXbSEYxux8BBQ2NqXLyHxRWdB2wLYisdunrYn6wRLWuMntj8PXkh8Q2zJk9agZGVo3j27Nm7fpFobxLsfrrk3N",
  "key4": "jG3ep5S3FvRgYHMjpkho6ft7YhZMFUVPk3SSuewzzMefPaBZGQdXdoj2KWqf8hG3TgVJBKGjGEF7PWYChGQbVwb",
  "key5": "jYx9RT126QtVYZ3ukdf57RX8TUWGX2EKMUPPGRETGny2kp3JvmrA1EAK5KMTBS33VFBVnKTHeHz4Lg913xLAyxE",
  "key6": "53TMuxtBKuPg2VLPVWKH8mBS7jDCLxmg1Mbq8aiFpfhhfBJ3LgQXFV4Loc4tAjoookukLVdS4dMkm223oASjyRgy",
  "key7": "N6X4MWRQh2SXg6bH8gEpMo9t8j9bgdHQWY1WwiJAeT2KkmrShPBhjcDCZzTkaPTEDMb3asdBwPHN84hWw6z2Xcu",
  "key8": "5rAufg2euavaaktoUoo5wb5BHTnXfhrJTPpiT64ABte2YiRH6BcQKUQepCB3gJCEVkGwuXYvbxjPmgUa3JG4N2aS",
  "key9": "4E9pnz7Kc7sjDmSjvuj1Jksg1JABQ9uKnuLYcD5S6Hw9auuLz41LEs2yESwnZKCFTRAyHnkXWTEGneyMMJK3wqtK",
  "key10": "3jNDPGQz1MvCck6o3yv2y1PiR947k5AtDFq6RLQMZWQSQeAuLo7nekr4cuvqJixiziev15FkNQoHZv9Gc93o2Wfj",
  "key11": "53DrH8MW1v7ABXvPVLSTW66uQGUP2nj43LyEKRzzgceAcAANwMAiSi8j94iwTDhYPx1dtcguyCwX6CihjHR2Eyjv",
  "key12": "5HujDAN6tYgdWKBUZYTxebuiwT5u2GrxRQLyGFnwgTJkdZ1LbjReqEVN19wChxzmX6ixjXjT2Y7KHWNRrrirZnbj",
  "key13": "ErR3pn4ik5CkrwNHzbcBTVdXXpuFa9x5qpMtkP6LS7x8e6SMCevSYL8Q7Fh8nevgfmD6h23Wt3Gk9RbBTS1gmbY",
  "key14": "3Qwr7WNYQUy6hscGWifDk37cFPyLsjMNgZzetfiAR6u7EJfDR5xn1M4dF3NWHXqd6sm9XV8aLFq9bbBaozgyHFXX",
  "key15": "W6JY9a8HeNk8UpRHJwG2quiyN8vJz24gysdte7JNCkb1Ak6uqdHhNJHkDDkJfNshDMgQ7kStt9Kr6hAUJiTQM8s",
  "key16": "2XdRfvVCdFEAHdF8Fax1CkXMV8z89MAzBT1V4NMded9BHPXL4FgZnb57JFkHvGLnYUv9Yq7pyBpuSJHh6ZTD2B5R",
  "key17": "4YWCYVEiRNiSrsPLNYV5ovmJZKCzpdzTXL29oX8bsTG36JLLrq96UM7oUgdAwjuTE4sYD1BNqNsBnefARQc17eRi",
  "key18": "2REeLVQxQbk2w5DKy1fvBnRTL9jjzQveBp2AN7zkbpWiR8L8fL1yrij5xuefckBY5UHrJG6TYTLDehR4PGHayQUx",
  "key19": "9jDmweC24GoQWsgVuctKrabufJe8ceWFxQLVCPeNZWD9WVVYNQDSKAKG8m1eabMTkVcw3DGEzZNw8NrNc5Lm4xq",
  "key20": "4YWQNkY8LLZACkBA5CxwgmmnNKMvu4fXz312vTWS3Ds4ZqzTpdg24BxaFBU4QpWTpSvP6Zx6p2cRgPypBSfYeXrc",
  "key21": "8pA2nJoGUwSQUhiAn7ugRpd36AMx5RhCaqu8F6n2inDSXsf28T5senjPQENmXtokf5UFoi2Av5Fxwf5MojjfFaH",
  "key22": "4h7KZzJmYf3fsQVbwVdrjArEurUC14LvLZhugVzgB9ZeG4ajVP2ttKyxSPMiNCA7FQ8CfJLjzft5CSrhFXcAca9k",
  "key23": "4BrLR3AKMJuHJ1SuQikQsg1qMXnqMGRHa9R3v1xecrHSDbvN1zMKEfjuWJsxUdSBZ2UURoXnmP96QCVzusnkcMMH",
  "key24": "MYYzbSDrKbdm8fsVeWwNtrGNaZ5nD5jcXJk9kvdekxQipVnx6ups7EoNY2TYgTUf6g8vuiKEHAMXhyjU2gaHJUa",
  "key25": "4tNDmGRfHdw7Gxvfn17QwfRLb5qfYhYG3S2X2mZPgUWmYbQabYXEoaCT1d3DQmXWPDfsZp5vnR9ghoGBKeWiXMew",
  "key26": "4QFNxGERxG84gTKyMKnPZofqiU31g8Gox2KE4fTy2Bpc6xjX9jUrqJEQfTJXE4qJfXueN7zAGBRKUPy6PJ2DJuuh",
  "key27": "22zaPjWxR4xyvXAAMWqJLrNLNcbb4RxqfK7KhcVf8F3MhAWvez1anJgrjWWqNmHyifo68kKH7rBL3V9wJgtUW7t5",
  "key28": "43xg2HBFazTNbT8XofsPDvqWH7FwcopxcGb16JNZwUB9orR4Z3bN9sVVQRdVkgikSraFGAemyk7wqGGVdiYmoJs7",
  "key29": "ctyVmsrX8vdmbdfJRMgQ8kyMs23RsLD7gYH2zKwmtsPJ35B8jpc2MZQx9W1a2bHPwiDombbgDFW3mUonHfsGDZG",
  "key30": "5fddcRxbU7vkqxkqGREt55Z57AvWkSoASA7yKJoEBWbWHE6CWhaNo1oXmTe6R7Su5MFBSW7Wz2AdVPH6KufvNTY6",
  "key31": "5QTWp6JgpYTiKJPxzQCqzkSnTcXjtWQDygtbVgnrvZih21fCoaJ5tRXihRsqvQRbJAoAH7qe3C15kfjZALnBRKmy"
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
