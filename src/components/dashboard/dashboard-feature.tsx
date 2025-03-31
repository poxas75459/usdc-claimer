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
    "4vvAcnGaDQqjjwm78wfW7Y496wMWDWXoUvenPx5FaxEpAbLv1QW4A8qHnEc961XvjXreczLzTKFPj3S4hpweYjBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HqrbV9z6CEP7w1q7Mrw8m91qMs8CUd57CephBDkxcpAhyRf2WjQ4P3roL8uuWwiboCKzB195JK52CSXbY7koir",
  "key1": "5XC2aKLusPEuGzhLCjGZFXSAkio3fEzWS9j37S2F8d6otLZe8w1qh8cPjPB6mFPGuBZrp8N2d1yiMKhv9NWdHMN6",
  "key2": "5jzZ16WPWmiVNR41S6CwxaC7De8KvGFDGggxH4D41WDxnVWSByFLdHGnQVbSEa9vHgzNUJLfLm8CEaQ8tmHUEddV",
  "key3": "2sJ2R2u66oB3TyXvHFa7f8L4ieDpuANjo9Z9DtxPUmTy1g4WmZXEBoUFGbYNoktFyZB9Fjbi2WmS3VYL8hrDEz1x",
  "key4": "3xKjWnyt55CfwY7mQSR1ao8MuCJhViPPjQygFiGV8mrbpE8bDhJMDqikJASsKNwRDtumhVgxWuzBXNfH6pLAwHXq",
  "key5": "kfhpo94qXEBDQQw5DgVfVtgW7tAFckxKGcG354CY4SRU18fU54qinDJy129RpwR7ZncrsgiJjRAXmuX6SEhb4cQ",
  "key6": "522z86m9pnvLqD3tCEJ5WthAWdc8SS2iFc1ugCUfsmjSmryDWRgQoSk9CYArKLF5Y9SdjFzEn1kJchc2dJHi1d9a",
  "key7": "5TWYmEgnSr4QercHTBk3ywZYRNEYZSyeUoiRRUFs5Rfw7McDbLTXXPXVknmV8VjqUzGt8du5yab2gCRFu5M6wH9k",
  "key8": "2GKQqijFya4DDkQS3nULgZttzZXdeD783DYzGYZ49kL95YhbTPdjVzWwXshRvYp1FwhrTtCt2KmE82cS13son5Bx",
  "key9": "3Avc2CKiUC4LogTHjXB3fSTQTuNj8s1baCVdMv48LdC7PjR9daMrtDuAyh93zUpMwgmich7ho6KrdEQzzoguLTZC",
  "key10": "2pn6PT1XSSihftpUeyEiJxh8r1spWn3b5tjNhz3qKSdcwHTeWjC2cqfP6VBcudzSzf4vjRhu8oS5hPPv88jtF7mv",
  "key11": "33K7mv6u9DGCGQ4Fj5yF3Beargch2ncAoNFJePryoMHRF2ZLrWpXRbznaqXgWeEbJTcCYFYd8jvpct9zax9B9TPa",
  "key12": "PNdHuX3v9GMtQ6E6mpALGW6nRxYvgG7jF8f4HthYTFiAWUXzjGdQ5pcqmSLyR1ECxUjs5LVhQPeACJjbu9F71ay",
  "key13": "fcKtUCM16DhvUkMY7Rwe3QMUAfdrCUbaTt98hXYuriZsbAPnZa1MCLRJz9YBUkoib8uDbNnm5ddDMMpBprohoae",
  "key14": "4NGu9PQ5KT1WeZWZARtz14zhUcYBTZ57YY6F1Ttw2jPyKjpnVdNSmh6fxgvpMsdw3BZmC6eEKGKezkVgzqyBxTse",
  "key15": "62NGJbyEUtxgcgPEvnYqAJsycfJkfw72B7kRfjUnDC4XZG3uaZHtCQikzULbVMAbX6D4Xcunb22LuH6qCZ1hdo3z",
  "key16": "5C2H5Wky8k4XXqY66EPGLZoSFakX9eD8rCiRiaVcTNwrUNhxyHguKPwHem4yTHa3hF6NsP4FpXestuWQ5rLmDLkF",
  "key17": "3gnYGirgiB4bccrYVLv3cSyMiwHGzEHfzVfUe64vCnv7WYg1bes61XzN54iWgnecUGqF26zKwLik2ryPZ87b9V2Q",
  "key18": "5iuJzNCJnuoe7Vs711Eej3JovqLRLifq47qPCJrjZnqmro7LFX6ENVK53r28Xqb9SRTRpjvocp1u4dB61NmmAqGk",
  "key19": "3iAmVTh8rYAdive91wbxuA4zkgNwJLCHkpMaf4FepmF9P8S7vhmB2MC5fvCMSUjEAXDa1xFs2b7Ec1QkWYsccwkV",
  "key20": "3QAjbtaf9rDFyWkJBELZNHrRiCzzcr9xfEE2Z9pjKcATkYf6svS1G3tjPXZK6GTxVC4AWX4JgBW4HcsZihXuuKX",
  "key21": "2Kwag541LRcwLrpazeP2fBrCPYadY1BrvnQtx2NcGnUWpnnwsHZ5Lwj5vAaGAbxfSRDLi93x4URLcfQdSu8AvG5V",
  "key22": "bnB7nxGPJwfQkbmX4Rz58AdNgT49tMffgSUPajsYhWzGocwz7pVjJnP7oihH6SNUARRGbBSKRvcGKbdqA68ynjq",
  "key23": "4RRHQCpWVgBYZ28AxjGm1HW5R7xu1uLBaZduTQkiWcigSRJ5jtmL7kNq9NGiQKNzaf3xJMLMZwfBWP8HAJRQw83g",
  "key24": "3yo1pU4zEHkkSdXrsqZCPNsm3PMYJX2jRsQvV8zDwi7cfSmDzQKFhBvhsvt71o6cA7MXoWwRWLvAE5vjGz7kmbvh",
  "key25": "3YpoV7CCbB8cLcEhf6Z7DBdCSB1jHsC6obg98ZdgGNToW9f4EBmKdtBjeBhfAB5ad7RBKqmckvav79oxNgPoACzf",
  "key26": "gvrjZVH1ZMkB2WwgziH371DefJaNpgqXbUrtR2UDHDxMJNzia35PBPWCfmKNx7gS6AEgcyXzknXPHWAUG8kVG2A",
  "key27": "rqymkGZv9gNMKM8J9GZyYbrpBaaZy99LNuzwLxSSN6bAevhVYHueVXhRqNEBpCCtDtQZzqq4yUaaUwmHRcqVQFi",
  "key28": "jnzKvPJCKxtPoaAe16AKurZk1GCiQEM8TnbeGiF5SgBvo8NNBBszFE3FXY4VTucQ4deRzdFXBEYzMBpYWnYrMDa",
  "key29": "4FY6NrvH53dz47HK68yBGxkpEoVCdzj5nyeQgNmH6ESZsrBz14uAigV8V2FwDJZASypUzJARo3g4kEiFsFutg6S9"
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
