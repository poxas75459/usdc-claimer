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
    "4dN62n5KcXw1256E7FLPwwJG45ruREtkEdtj9tUwswZvaZ6aeRDouKwRUhWMz1taNWaBkJiPQCz3imMy3f5UR2ZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U36M6ydESexXPr9k1nja5CNMSfs6sNXssgpSthRWz1TZtPwEE9T4ypz5L2hcL2v9Tci8t5iZHcmzm3Lr6JE6eRh",
  "key1": "AUEefxb8SmK1tohWSigufcn3RZSRnEFdEbHC45Fxjaibyxt12kSFLtMLfa2wNAQETiHAfgvSfg4JMarM3uMb5YL",
  "key2": "3ZdfN1Voqoiv9WBhKa8qpsxUW3SVTJVeqTCMvHwwKxGUYHYfTsLS12Bvh4H2Ta8WtaXwTrvuKw9MQzBQ5JZHYtrq",
  "key3": "2vDPC2MzZ2hm9D5CqRnfr9HKVBhjgn8sxbxMV3F2HUKexBDrMHLhnyt54x2EqDaKazBo9Qu4Eub2UUKiwyjRFmF6",
  "key4": "55DKPEEYxX3u379Kk3aHGpRLsRHFKdfqj8toTMQAHsZUcgtBbPUQkuF4QZxs9QUAywmrHwUiENkKL3aoMNznkbTj",
  "key5": "3QXPyn6ZGFCAZiXStP75U14gbGaCNhA3Fu6KriCGvztTvgoADfZ4wA2ujQq5WiGhb2oPc2bTMvu89FFTm7zfS9UE",
  "key6": "u3dFCvgJoB5sy4ajYkWDFrGFS6szttRfpKo4tYtb8iv3oasDXEFTdSBgQJn8Pa3hC5ZdUKvQ6rr12z7euzgTee1",
  "key7": "4VQ6bWXyU51zgG8xpcQrswtcjajT9TJcGhSLutzZCNfJB9qtkvuViLT5YH87Kwxoqch2nvXoWENKwxWKbP65fe8H",
  "key8": "2Mbp8yfHrTnmNht5XU8z41T6RV4YCzM4NnoBofe3dUCh2jQpG6ceoLNYwPmB2qfDH1Fkipu7h4rWiKqntyKpQPJ9",
  "key9": "2ujCFPS7ctKe9urqS8eo1Pdcaqhexc8jsQq4bjutqenBZPKurJe7b2JANm45imF7rX7dCYj6WfNfxnweN9RQWSkt",
  "key10": "5TpZrbo3QDKfo1w1gbY8TrxLJekZRAs8RutNhB8RrT1Q5XBK84xCRoHH5hEww2ZAGn8BsG41r6bkT2RzQMCju6Vi",
  "key11": "4f3aJTQzrdJGqXfRChWA2XpgKgtJdZRYAA1ep16Q5uJnuDsEJ3qvAmXYWjGMMVHW4GqZJ86Byn3sy7rpJLbB6CwC",
  "key12": "5MDfRzJnx7heaSWkmDTR4NcshQJv4chMf72UrTVYCz3iEZWa32XTJoKLRTFpoqRTKZ987NoBkSK5jBAe3YPK6BCS",
  "key13": "2d2mWzaBKnTEXeZmou3jmsN3zT8FGAfteDLXjrHFU6fD4oH1hwSnLDXWbdxyWzb2roSEgGJ4Fzh7ZJ6jMkL16JCw",
  "key14": "55Yu8ZffoqHkNsUR81zW7qYh2K64fa9Q3c9TyN7jBJHcWjDLh88zbiRWv6C71P4Pa3LFrxPCE2nAZiu45zojWLGg",
  "key15": "3oQnYu7DtDfw3PwgKhxCkw5UFcFeYFCk73h64zWb136CGPCykqw9f7EV8JZVVPrceyEc9ofX3FwqUY9CWsaocfE9",
  "key16": "5Yf9fSSbpsJLsJqL74hxZySBokjyJiDbXxZjd2QLQRetsTB4crLyPKPfvV54Hpqo1ns23WVCbfJGyN9AeckzYgpU",
  "key17": "5HdhgkLmcqqRMmKmnTkV2gHMYv84WmZEfVsYe4N8XHNPwqo5ESXFS5CUe3CXng9a9P35Csh6zDozN1T8jNsAkapc",
  "key18": "5hx8r8Uh7KyG63YzzfbKtgYdqs2ahzQPpFC2MKYYdJhMmZzJGXEjZT17aGJpJhob5aBYDnv2PhrpQpwmBtP6gv25",
  "key19": "PKkCAdt2ovbtbtc9c7Z44UXAkjxm2bZf1DawpHpE5mxbzNV8vYXb6S1Avez4ehRK2EY8BBgV4Z6vr7KZaJkcj1T",
  "key20": "4JA2w2CyfQ51bANhJ38kLVBtee2DuqprtufPdCWRApVSNGmefKR162zL8ByDXyV7M11tFXmnpCM1nHNquVpbPLrW",
  "key21": "hWMJ1yYujq7uZqBqMBBf1XasMBppKAP1YmpgXTsokZ2yyiXbNu2EGoGKmTZZU2qZjJTkW2FBroVAmZorkBvwkKx",
  "key22": "2FebJfekUr4mG1BTFdJAerUKnoFcUUpxYH7YPy2vAwmgVqiGfAtc2r9rjdqMC8t4q6CVqmvpCX7xYGokDeawMQ7h",
  "key23": "4RCW28vQAExbSEULdD4op6SVdUBcFfNnKUBUN6ajvs6BBxryAktMSi3iWk5pLojRF2N8r5iGhhPKbk7paPVh1g3c",
  "key24": "47qkDmx4Vg6r4ECNef3aBzbr8A7b6wJgWwQY1ZgFe3HswZfiPBxyxVGxNJnYGeK99HEpH1WeNsmdHMFmrSgizB45",
  "key25": "wtAs3ph4Bc3yXQbNxQRsyfji4Ki9n3GLwFV5ijawn2t8o6Wt1SBAZsD1nYM7e8RsmvUjd2XDGYU3bmUQB4gags7"
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
