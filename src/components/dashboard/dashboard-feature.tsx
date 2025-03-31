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
    "PPKsedR8pEwsVpVQH4dgUbuxXGB5Ag1cqBEsJHuurTF6mpoVNN8zkcj5qoaxM1Yrs9hdyKLdGVJJid92CHxg6Bs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HBrSvCrDKbJNqkVmngd9B6wMgtBdneKtuureHy57Fdv9jnyi3oqetdqNsuNjz3eSg3C7PUpDT8ZY2FmrXYGRKM6",
  "key1": "2TW2TyZkofwjNYJD6wZXaZ3hp22fm1FCcxHpmHUBqq5xheQoytdgTvhRdQTUfyehp39nViWt4knWsi3xFuQyLP49",
  "key2": "2xcB5H7oobf6iSbei2zFYMXftaHngWgZcXf7CLM1s9DDERr3vggc5Twj8ZBrY9T7QbyjTENFUQoshY39za7Pxk1a",
  "key3": "NQR7y18PKNFfaVPDu7eBEpy5EbedmnRLPTko9A1zzuyvJmJuRa14ALR5vgKCQDjbikwiNcQNEfTEf3BuBLnL3kv",
  "key4": "2jNNaPL52E3m5RCz17FysehyGBP1oN6KRGEZajrzEQt9ZK6PGTWR6GZscDkMP6J2Unh7Nu1P78pkutx1NbrjRFme",
  "key5": "3AR8wG6pnk2YXY55ZmvSAPRMFVyqdYePSQmR58ZSSt369aDJQpLRyNv4AXyHazEQ92NGuMoZpCVKm8pFgX5cSopg",
  "key6": "36SFDkfAKP7K5VBk9AKjF8DTWsiE6tmhCQ4kijXRcbnPgBs3aBuPq4WDB52EBi7GGMNhNqhqNMaHVx9uJg8As1qK",
  "key7": "4niBVcYqyYt273ZjRG5H9j9UB86uezhv4wSqUmocsem8Mx17Y7scHRCjEK7FnqvVg6is8dCPBJVXHEpt5idhAE8j",
  "key8": "31nC89nWNYGpGnDzgzzPc1qNwZ8PikwGeJcSSMVDXddEqv15VEbSibvijBTn8bkA8Krg3baZ9xVVWYUM5vPqGdji",
  "key9": "3tixdYmc7Eu4Q5eeqoFMLQP4Vefo6LtSHyYzFFhgWXfiJNfwoSioC2DsFuuy5mUMSXj588Ha4Gq5dgsJALG9cvxx",
  "key10": "2rgRJuw1xjtwiz4qWDSoLMHnp5Di5EENgibMGwKA2ESQ48B2vVxsKoQfbBiu58umkgrHjWvpthRAJBGGX4JaUrWP",
  "key11": "67VtDdPDm2pJrFKDx77MHxnSCM2rC7SY4yH6FDsw3Eqck1zrKsxsy9FZDUPzstASMFMjs8SyFjqukPoHVra61ibo",
  "key12": "nK3iPRCE51WHFXF64EmzTh3QtjQW17tQCPUmEonNAAMu4vSHmiu9VFKdjepZkQayJedak1Rj8kd54L28neqhVJC",
  "key13": "3yuakQYUefPwMXdhd6dsrszep3D2cx92FnxmHGYymzyh1dtcLUTAXLuruCczgTkh6sCzYmqzaVhjNkmfrkPp87Y6",
  "key14": "32EBSHFKJtej3XsQ5Z3eRZmiqbTB76oQmZqQzMnZFXMAiVDESW5EFhAWoh5x2ZXXABqqq54cs343WKgfuoo5o4o3",
  "key15": "TSHe3qPxSgCWZcKBSouf9AYvrxU6xCVkcdgK6vUgEAuzqDRV5kJMhY7X5w1qJERKqgwe7aMfnwJCjaSeg97cgKZ",
  "key16": "2tZYgedjCKKfNPbEj3Cnk7gVxBuPYconH4Sm9ZfSKLEiFVqyyczEZevRYNcvAHWNnv7L9EmcjJFsA52nh8yBMhJh",
  "key17": "2v7ye7wkXZZH19SQ2zXumi8mgxzdegR39XogcVzHaJkABifAocmrE18LUxGCg86hoB9HpkeWDJrTL3evfs4SbDs1",
  "key18": "2uWB7AZrjp8Uj1xFWrp6Sz7f5JL7cwtn1z5SAo6H6DsPUMauASLcL6C4ibX3dt2GG9hngBMvrQEjgtZ2tMMYvqX1",
  "key19": "4DXfH89mQqxTVCPgvEnwcRfy5TGUNtHPyKLNcmLNteyZXEzvDxKLNpDqedXMWQ4n7VmGAbTMiWkSeUdNkyJbrfE6",
  "key20": "676sZP8Se4RtKVh2Rhgbhv13ZCr18sDcdLxLVNRirTuhJf2KHb6o2WfpRjKchNoRT1vrAFy6JPKpoJERnvYpsMu4",
  "key21": "5KBGsLd2GsyXrvxjoXaqgMHFZWXVh4ovs6minAPpMLKzqMwJRJMdtA4JXxuEEm762eChfKHyTYFPYtFhf2aWnJB6",
  "key22": "512RtVnk2AQENVWw2f6nQVKNM4M5pJS5b5LSDBUpbQoMJYSSH6HJnk3H7J1Fadaiyrwk6yHkD84cf6Er1pprw1UF",
  "key23": "4dSxWYAbmS86MWtGr7WGgqp1QBTvtEuShAn9W1vmsrCuCYjLc77tquBu9CW6kTCUNYSNnBpyRJufmkPP5Qis4i2h",
  "key24": "2157KdEuVMPvMyVe9snswgNPGsaAHTqXVy5nwx8GoxeU6LcpWJ3376stc9LfnPetvif9Qfo92jw15XawbEPyFX8k",
  "key25": "5fp1LDvEyvTP29cUb8Mdg7XJcgJz19mnHLaXEVvPbDEkvPgUU72YP3iTYRvhxqQW7d1njWU776ZoWhJDXuJdzgXs",
  "key26": "4iU9G8CcdHdit8v5ENvQxo5bh24muGxbpURUL6Pu8SQeBhrVBcFpTSzHSLkUmZmoc4wDDueshwHixkVEDU9h2Xvr",
  "key27": "3uFXzd3BFFq6a7cEEeKqnnQLCWS5s1TNZ9DoL6Bvci7Dwpc6dqN5FvfgaxyDEaKdfaKEXZN4dTA4VvReffL6EVpv",
  "key28": "yzBZdsnfKJuakYyeN7bDLgDHuEFMJeYQ7AK33NYpayLqWgxVmrXiMD2qD5uymFiKeap9WtZ5PMQaMytYXj9SY8B",
  "key29": "52vv6cRYsWs8NZjMTnCRnCixpjM9SqYJknZiey1LeujgB55iSe8KHTcP9mP8rAH14znyj74WNh2vzVj1LA3P2JXe",
  "key30": "z39isyqYcaCCD92hTFMBVUNm2YxTkezFpgr5zMCpFX4LLA9oi8KQ2une95JG4xroMDGbz8KZajo4q2MNk3ZmMJd",
  "key31": "3YYXo4gZ8TbbeKBSsTGW6kiM2mmJw3rzqHQxgU77fjBX2VFRettN2HH1YzetLQZ4LXufpNdUtPvZR2j2ZERrVFq"
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
