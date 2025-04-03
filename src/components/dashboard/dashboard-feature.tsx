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
    "64CUF7ankGHNutUKWMgQhQ2VqF7DfiKXuYcE9YSpN8KYDLEvUyLzhGwNe87fvLdVZCkKEgYcKjemyhs1C2uKMWM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Xnytmbigwhbj9ZU9sVkGCdrtwPMFkFMt2Kq38WdW6zuMU8LeaYW8LwSkXkWocPVpunq9Wh75C4ZvAAD3KncMo6",
  "key1": "2EWqSgCYwBeLJnHpvKhLxjwVfaho5fiKDg4yQ4oxbALmWeEZuvzudQazmpFgP8nK3YsVUhaJ8cjENZrNqNdtHBJo",
  "key2": "4fnQzbXtxCbnSyqMCvaVjjvimQYN9FYT9pTLnUcTWBX2En4vPBnviVxeDk8eCvAdhy2rP5scTqj4vz2A25rUC4H8",
  "key3": "5jRLhWGuXPpxyk4e3EFSR62HqtX5Nk4LBPCSLxHcdjxRVefAdraoQhSoCAbZi6QhXpB99axAazY8LAQDvbdQuaFp",
  "key4": "4QQGuhrHipr6C7TpcwGiWqfGMv8jbCV5PbJV9xLFVgsnMSmmR3N2dZiZssKk4ruXtzj9qC4FWbgwvTzzM3Un1bQo",
  "key5": "4SnG19UyCXpn9TnVnfEPZx3roiQoJfvQiWkA9hiNM33rCQr35quCHzYgh36x6iQhAjXdBsXFwpGAzAeELKCb6UWr",
  "key6": "663w9D6LgxJdzLbzkPCrD9veyUujKKe1KXi3HHiNanitxWwyQoq2jAFevW4ZJA5HCRWekaoZDPSryCRA1G4xMgSF",
  "key7": "4RrwHJWJf8h6EMeVqbuvdQekyi8ag3ciLJ7wsme1uTr5pXiwd5rkuQXjUuENLH1M3kzHqBQbB7q9z1YYtJpJy6pw",
  "key8": "4Bfzh7iAFo6TAUym4oghcXt5PV3aRBFstLHr66sKaZPficitx4abaCtKmxU1inv1wC4q6wNfqiHT9MegmSMHYxen",
  "key9": "2LxMnepTErgaY67oukwn6VKhTMukVPkzABvmL66NejCCWCRjQAMJwoU3u8pgVrrNicVa9s44ZDx2cdPMBAkfKiSH",
  "key10": "3Ks5tj3jyWA6LzZefRtpoN53yfioLuD81bRZTU1TDNLAhTnWWMHg3QQqfmJ2QTqSWa3mjPjtnFc8DyBvDUyJB8c4",
  "key11": "YmymRK8M15eERLC5KsdNpwK3h21qyGbFuNNuZHdjK2jBgqKbMcRSsDNMqjE1RxBbJCXWV7ShdZs1SqXzVf79SKX",
  "key12": "4oa9SFLragDsokUC8uLrjczDB4mxotrnQAoAvmy2w5a6abg8dLZrFiYGA97gDUjMyiByE8mcMp3X8mY9zUDMQBvi",
  "key13": "2BN9J6W59fQH8v8oHv3NArLUfxig4P7QGXagAK54zRebYBD2iG7DCehAfjG2mFvFSaWUgf6LXprpL33CFUgRE1pr",
  "key14": "TNKgkPX4fCoSfTTaSsrJTNRe28PNiZ2EXqAjDA2MZbwdwTNy4LQBMT7wRLq9Z4Xgoi35RMmFAoATnFwdo6i4FiG",
  "key15": "645Z3kYn8YfSn3BUtDQ9faBAhtzPJMWB5c5oRLokJ6tpn3Guu4qjNL2ZzogViD4FKoEK5shpkdJssZkHqQzLcp5h",
  "key16": "19K9j1Xt7G8e9zL8PaPErx3UoTi8zYyFduxFqgdqV54jUAMdqf59ZSG3ViVw1pyFNgUyfE8BQiEbqCbNeRiKDSN",
  "key17": "4xFABCz4kpFPwcN2nA5nFQhWFN9m2HkzdBS5YvCiKV6sC9ikoLxfzheEH2hQhkxMn2zzTv6N1BHt5b9ZNA2UqPjZ",
  "key18": "JtZs6kyBzQSkNf8yDobtG5Z8v7RPGYkVzug94WQf5qcvR7gEf3xXUMhjRdcxZuQzHJQ8q1uc1Eejc7kvdt3X5LP",
  "key19": "62aRm2gsxdUyvzwWDZUc1gm8BxqvbhNu26boftCnzV5Q7mo2gzjDXqk4VMR6TbF3fhhPSbDkvBG2Np3STNmKwwuU",
  "key20": "5JBouUvjZaaduosGfAHesictDYkTvhWE8zjtd9fHXyVcQX31GoJDufHnThDnXuSKsLcdEXxaP5wRdSkNS8TjmHip",
  "key21": "3P4QfznGq6Lkg8fVZPo5FAovH1H8H1tcQ79X3hXLduiZKCY9iPeEgngVjFJTFDttt6iSfHAX1TLCTwX7o9w4QuRx",
  "key22": "2fcvRRY2rqBcrZjNTMbADchVZoLY812n2cSWaWeg3qbt255EoVMoDf63vrF2gEoqFEw9trResSz6PvkWHiQ6GN4z",
  "key23": "2LsHqwZyWBBLw2cS3ZKfpiRFDvbUrETkzLuiUo5FwJS1an8MohFbEmn7yf5BzRcjQzs6kM2Q5ndXMtJsudMBzmHX",
  "key24": "DoxjNvxp1VGKJ4PL16FsF5SjC9qofgg5oWUZTaSBsE1CjbkUdURcDKB99qSr4TD5oaWPfSsDhVLdo1ZE3aozN9r"
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
