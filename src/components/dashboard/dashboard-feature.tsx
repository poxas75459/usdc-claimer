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
    "461JgRVDQzb5LZky382dBNvsgLwCM7uJxTzhzG318LXUgBycDSip8FSyvK1qEDuVUdcQ7amgLVtZNBLGrgTS6ABX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vXQfSm92WHDuTMdasizjtfnatk31QHw34QzF4zTYgg4EZdzdE9Edb2xMkkgbDhMaihLJEAREiAKAGwd3SABFmAh",
  "key1": "4YaLhXiftJAwG2HbfCSiGdioQPQa4Zgkcgx7oA4KPNCG8XgXFg4GQhVNSZMRducRNiT8F2fDS7xCJhF63PyvsKRL",
  "key2": "3VK39J2eE7aZEqbDiLwB2iGyMRWVK4dpBjWx9eu4SNp5cC7sXTa37DridBDtdYL5CFhPVe4QptzQhbzDo6Re9iDH",
  "key3": "5EXH6tqPWQrfrF98fk6BJoNNuoAwwjsnRvHu3UXP73j9VKyCsPKdHss44xE4aM1uexuvVs3zurNhxtTWKCN5e9D4",
  "key4": "3a1acUN3bGqgtZ2wxv52HCPJGWA5DFjo3ZpSHrR9169akR64aXqcDoYFDTDXU29Km9WWUU8xexHZdToAumGY49bJ",
  "key5": "3amStvm4VCP4yJHxfxwdCuycS7sWAuphVe8VgrqsMkGcc5Apddhswsgui6c7grPLNFiqP6e8cK6cN6bRydrd2BxF",
  "key6": "4NfmRgXAXbY5Q5FjX3BfAwHC55TQqpstDc3ayg27jWiQjoykbsk1tx2AzbKajRQrkRsu7Ris8hKrSyzYhLXX9byk",
  "key7": "49JNi5JRfjD9PdtR9RuEew9Lb6oYMkgjQZcsvxLE81BmdrZTbNNCAj3Zf9xSNU8UcRUcmmiXQAV8bBCWPRgR2RrL",
  "key8": "2VdvLBXkmugUSvYC5X3YznmFcGG4fjNdM7peN3eWAEzBGe39CggMzneQppu4HG2d1FnzShd8bFwfgBNACBDwz7tc",
  "key9": "44qHCW62xXqTgfTvLb2sKgj6pXEim9w7hkm1k1ephPcWXyLhPKTCXew5RCf2LcgmYuQw8J8xH2trnjKqyER782i9",
  "key10": "vp9nXS5Nse3NLumJ8AJ9tU7MhZrHGgJX5ZNekjjAgkXLEsTmEK5UDfPjc9vJ1Pf6xFc5Z4BfKMESUFR3zz87G8Q",
  "key11": "b4nt6F6Q7XLYy3bH9rTMcgrx2rzenND9vPEyTpgsipZZPinRt9GEHoHLCnR99i4dt2orGgpeQnZMMuwEMCFFPZz",
  "key12": "5roAZE2SZDcM2F8dQqKBEXVRomugkicqxKWEyubzuBa3Np7HFpCRKyyUVabEzKtWfQ15vC71e92NzM2wMSq5aqbr",
  "key13": "jAWzKGXZxikataXRftvBAe5hzVr1vLSNFnYVuNErHGbQraFBnAqFXASPEYaV678QvY8719XhHk7FMSGxKBzi8FQ",
  "key14": "4wKZZLLhDnC2ytsP8rHhYavptZYT93m4dzne4Gypf6o2uae68t8AMfqa23PWeGb82WZaSPzeU5VkRfceFuQjBJqk",
  "key15": "3DJY3uuaQTNvCVp5ie2Bbn8zpRDc9Bo1Kp2J5auYYX9Rcbh1MBfqQHwZRbVfNkqN7MSH7sMJQLXybU3wXyivkabA",
  "key16": "2nY7DKLp1jZCh8mgvfvpVVTqF7ySaJkgi3L6qGBuYG4zHsYLkNtUXioGeF4UjtckHx6FTLo23nRPTuprb53NpwUj",
  "key17": "3F9VbpUXeMNFPj6nujVd6y3worimUWG7ghegocqY1SfLqZ8MbUHT1psBSqxKb5petKUPkXoEi4Lqo646aktqsVuD",
  "key18": "52gpyfQTLKKyXtr4UVsrJy2h2EANKhP2i66bbP4iDdTzhWQkELkn9h8ksjHnzK1bXL7kixj2njoVcTdU5t2mm38B",
  "key19": "3RN8DYF5XPj76Rn5ktZdsW8v4e6fUa47a25tziQAvVfYJBJAsUCyUTRQ7zLFAKNbPAaBacXW1SBtCzMy2iSoSUwP",
  "key20": "22zRowoAE4weLdFpgyXXRzbHbPN1N2Eq6eA9o8QSq5mFxPpCnYxSwSkjifYb8yZVHduPyU6NmSrRoyJg5L44uAVC",
  "key21": "ENX9A1HVZZYSFZeypZLj4XTyqqVwvs9M8cQm2iXMfE42ut2u8QuEuy4rWVj2v8k3i4hTDg6RsvmFukcMCswV6qj",
  "key22": "2SN4nXgXVmexC88DST88wzaqeno1Jwik6NNwofo7miZYEo9pUcDzoQ2xEdVnwkQmR7PPoR2UvAjqvcqkuvo1vG7r",
  "key23": "3UGqCgcL7tV2cwhGa577ZDGPsRaqgjuyTjbxP9mkUMC1zUts3mSNGfvXUEEJDeMhkCh1JFbSTXMGQT2PVjJw59ML",
  "key24": "6NWPwkL4mkqViirfS45dWKXRQN4HiL9ZHMA6J4nAnGFRJdpLEy1RLokcTqhhM4D3Kb2Uao6d4oCPLqpY3WbitK8",
  "key25": "57UALEV2RUDurs9ddat59qSRtkW5D23SXMNXkd4RywQno8FRx1ELvBg3VVrZkziMYvu1DRpLdsdfkoG8C5CWGP3L",
  "key26": "5qVMeqdh9FesQXak9UsHW2CJ5AwKbK2zeeTpDHQepeWRVqVoVhfVQW2Tf95RChyy3MDPE4LmxwqEqWLk9tGtHkHw",
  "key27": "4ZkexFSZAce5wPnZFjT8ACZxgLD2J9EtYpggSzMP2QkDpJe4WKHm7GxeHyGbbHJGuTjbTUDsNvsGtXisi5r3zdHK",
  "key28": "269HhRFrMzdcVmDgDe4Vx8wSpqobqPQCiZ1zVgp7r5vy8bn381JYo9pRuvDqPAHUdZoBu5F5xh4b8YhpNMScYk4x"
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
