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
    "3iAAwLPKsMkhjVhT6zuaXTCKP4z3rwZWiNubCpsXRp3PhQkQdLb8kwwj42japiLhTGZhCRbHddDyYpkbVTYt4sKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xQckdH7pVxKmBA9TUgPDconBVduLALipVAT1CRGEcewaARYUrb2fztkwYFxZs5A65CEcsJqzx4xkvYmyAGNz9Qe",
  "key1": "2MnoSacR571EHueJRcB2fAk29kPJwoeCjHNo27Ztw2acjLZkyinLHgvjZ2JZCHnSykk2suZ91f1JKXTfSkMP56wM",
  "key2": "2iXYtqmAXCeubHPsXqLrys1Kiv5uqdc8uQmQt1iuBTapzwGTqCcS93YF43wFPpfHAe1uQvKjvffPutVSzHFUXDJ9",
  "key3": "5Hssw5kYpXGi31Tw9mJAf2Ar1JQz44bM2yMNGPGdcw4wWagaTj5ghbTizXXprTS7aXskQG4tEfKKCwPUPTSiu8hX",
  "key4": "53AGNbXq5GwgoAA4iMrsNgG8JaqaW2G9Y8QKYfucCaak41JvnaBPxC4doLndQQbaZGzVkyPfK6QxYY5X1rNowM37",
  "key5": "2vpZrwE6iSY6PqHHCgqBz9fKSLDX3n8fvHaCw8PgEky1eqBZVPFVm4vfiR7bjsTDa6Hmw9J8UHMpm1M9KAGNExS8",
  "key6": "3Za76oboz9nnoTHfYLW6eGdM2Yd6NnEwzYVEFwfrKTQkewnEsQoijHfc1Yc9V6JbkrBWAjZDghAfnXjsjrHnuoqJ",
  "key7": "5cor4cvsvUpLhvRFU6saEhY3bE9q2LRL9p3KGEPT6RqCfTLFs6Xqev5hKMg7zPpMXjA96kmgGMvPHU1fKdSt9Ytg",
  "key8": "2SvC95Vycd1eUWrVrRNvVqv7jeABX4F6Gr4tpc876fHwK25qQ36EeArkhg1AqRMCGv5Tg59sZzoND5Ncp7KckzU8",
  "key9": "2pDgcgmpvvUmfvig2DoWMF3ks69YnDhVEEjb61hEP988iHiCFJHtQVTf59LopwDebB8B8kEYW47y7or2XFFEChA4",
  "key10": "4QStJJb7ZxcyrmFewDXmj215S6mBM4HDjXTw1CnwgVETXJ7Tq1MWzfaF3ypvkJdNHD7DHWtgSxuUb9b1cJ1RyLr4",
  "key11": "2tccXpgoygWGzHaKo1TESntDN2SM3v31fhK9iiUcsNyHkxzuSJjJ9tACFr9SzjY5rC5xwjkkojb2GCvcCfu7U71v",
  "key12": "2tS2xwupnDGP4JGyN8JxDQQp3p7oFQf9vevhYB7sKakEpFGakCirMZVYdXBiKTRW8bumrXzzk29kGnyEq6L3oBV8",
  "key13": "3akJX1qqYxELxJcR7dFov6FJrainarju7332mFRGHApqcSbzc3NoHNLVimhLfJ3izxw1CSA3UHHFRVNKZ1qjCNRD",
  "key14": "6Mjfu1YovR7RaUVu5rF9ouu9bWDKcwDuJCufR9v5qqxszBzUBD9x6qKM6jdUXQR3TCWdrVtoeS96Emt9JoZP2nT",
  "key15": "5JqaJH21btwsj282a8RK799FuSCSAPW2j4751bmjoEoTnqYZaHL8LDTgS11CyJLw4tCdd7FwmGGfmbz92k8Jt3fW",
  "key16": "26Vqw9KL41V8bpfARXEqp7VEJkYQsB2Xsr6dtez9gm7GkR3jKL5HJLoJTovcbNi9oPystTytfR3H4P67aKqxRY2u",
  "key17": "4TjuSpeY9TUuzAT16vdPycwnoGGug6MUuewdN5ZnW4oGaMTJHjfRiw1gzQ5r6dH2XfSGhzPAYAGx9ij9sJLV1nZy",
  "key18": "5EXiX2qbc7yrXhoqS6UtZS3MgCUthfRWhcD1ZKAyDHbdPprE2npbDLNmSPoNNuzgKhQ6ViHGBYj2Wcr1JuHH4LR6",
  "key19": "21kbn4NuwUh6Qbw4isbkoDDDXRp8JxqpW8wFnEBiBo6kJBNwQchFgYyxdQneiKVm5EfmJq9QDg4smp3Shr4ebf4y",
  "key20": "2JSKv8iqk2CEF9LEgB258ahYyGcz8YHCb4ViEWKmYiSh6pBpvUijXFCpiZZ5J93iCB83gSMSDX5RFSVoZqmuowES",
  "key21": "5LFUR6DzGaFFP4Puqbwizyqqkj9migt7RnSjb7jQXAj4Zji9f6C5MiHy9TQHfFrwym42pkiLHtmNxrmV5twbEJjt",
  "key22": "5erzGeuxXnvdApzddz5XH4Kxk2x3XzSG8JnqLvwCGVqMtzyi9RCL13fnUkcQDQaaTZooWf17f8zufJo8XavLSJNE",
  "key23": "2HFDAjbSLSnvfRAC7nF8x84tLtSC6sMQXPvu7U2AooDed9xCfzCMYiJPG2HDPYhmbAeH1dTy8i4VPikdADMvcoT7",
  "key24": "2FfsmXyqwv2ARSihwPWuAiVECLpEvd7n6cFMfyKQx6wMCjYHtHnyrGz37yR8tkxUr4o92YFhJ6dEWpgyT79bfgfm",
  "key25": "4D9Mk6wxztgpEGKfenhKagJRr1HLj38HZWofRaP8ydRL9U87BbWijNFXm18XA3KDDigQcVQNnLvaqC8XUrhbK7iW",
  "key26": "4bcxXQ6orQrk52m44y7Nw7QdvVVp4Simv4eTCKaAzB4Bh3gpEHWdBSGx7u36WY34mysQ2njZHQbLqz2kDunZosYL",
  "key27": "3baea225ShKr2ZpnDDZvMcoYhPZXoQMs2awHiAM8ffv4ngyxvbozX5Cf7cfMnRw66Jzu61YxjQop7ha8T8E6MTdN",
  "key28": "3LfnT3CKSjvQPs62xJTtnqni2XnkLjbcvqR5aL46cHS2yz9o6sbJZQDtVTHPqKVDj376KQw4vDW1Sv4MhdMoYYq2",
  "key29": "3vpTNPxjxkYgcMLx8feVaZedRvtrgX7HhSwzWyfEHGm79Bf7AAQjCZRf2V6kMGuwdHCaNj9XsBsGLwL98xGvUNoM",
  "key30": "4N3W6zWGpZ9aSe9BHaQLbd419DWPJZvHbybDBBaEbGdgEDHJY7m2TPLEjH4DwDAuai82UU6mfVqBkTjb48Cs4Qoz",
  "key31": "2xidwBN5h9R6TkqqmRvu7nsUinKqCncVrpoKAuf6YzrDdsjtoEW8HvQKPsesJX5DnRzrAVTwhwBAFa2m75Q1tcYm"
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
