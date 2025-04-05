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
    "4WvZ5bjDmtnm8ETEEQx4zQRR7Uxy5cdurs1ra8Mj3MsVG9QRJ5yfkydMugcQqraY6Nc2HTAwT3NHtBzE9quZ1ho9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AJx1oFfB3tmkZ5qzinMuPC8qCLwfcLqhS5AzQamZPCqwJzHfgTJjNSHud2ykuLVon4nqiSajiKqVdzbFdsEyhbG",
  "key1": "5CDnjXeyUgSpAXA9ajPP7XMQM9Pp1dHSpJrxSH8WHnwkwAJe76QXNrmkYMzs3zSNYZv2TKqeY79RqAHFzVrUCQNV",
  "key2": "2PWRiEy36WniXaBZhb2KS7H11Zyxa8wfuuoepfx12WzRhc4QSt6R2sR9LZmRyCKBpfdVuJBnHQE4Xbdj5n2ckeJv",
  "key3": "39L2jUAXZBKFoQJxEos7qwD3K9LAj7UcbvjGPQaRD9TQmW3bz5R38Tcy1orPLtKLKkzzHxgZJ2yCK9jengcu3Fx9",
  "key4": "yTh6XGhute2iFVmQSsGcqqftyvY5qkuCTtJEpqVeQhUeBzBHkVDWyXLSt5pp82vh4x96Hgr2J7EZEvDsKeYHF3R",
  "key5": "YU7uiN4KDNvexzrgrbVUy9wBcxcnfQxms3RRLJwLe3e2jviXNphc8bH5EivVAc4FqyVkxhQUW5hSKWRegZsho2Q",
  "key6": "5F2x7i3BMb9Tfp2Y7p2n1A4Bmixt73GUNGWPNQzZANFzWw8P4Schr9Nf947q4e3vcXEMhJ5vvehYE7EvihzGKxKV",
  "key7": "3xcWMNuNTu3kro8QmHnCmP4akAk2voS4F4noPzohGEpnVxYjk2sV5CAmJ8qwcQu8h6edQfE89ZzvvMHtgPEsdpf5",
  "key8": "4ebb6QAU7SD1ZrCAfcNx8dix7oqNQ3JK8otrZq6e3wi8416bZUcwDzAFpxzix35FxoU1keHaKDxjrwFEYiSo2HZ",
  "key9": "CiLeQxH6bZGd8dPqsnhw8svCPqYzQBdi5vLvqEjbYnEfJziMHMLpxnubBm91JxJqFQggpzwtCJuU33T9yzLnza9",
  "key10": "RFwz9rovkjAxxL8356Hud2yEU42gLobajACuuAto1Ky5ec62F3ErHzfinYHeycdjkazEzwcnu5ZitkbovPLvyha",
  "key11": "4iieS7sv7LzkzZKDqQKQ6ioAtUZu2EF1TJPsNDUL81svfNXuJHzsVNyjxCYhkM1Xq3QhTd2ejiebt4DFtgp4qNdB",
  "key12": "4jbUDCP128KYui1arLbmjkMkY8XqjdWSd3XTNYyaEpyGt2u2f5t2gz26JNibgUZAUTi3hNKoDymNJAX3Wnf9LHqP",
  "key13": "2e8DTFvWf3J9QktuZUdtrVxyjkNPKBgmsk49kbT3jpRhzErVouhwaUVY82PSCYE7z1VagWFh8YyBbSDmn8oKG1RC",
  "key14": "5CG7odvgKkzcRtnXj267yr7BqQm4dbU1df1cB5Fw1Diiobk1gsq6AG5czDuoipC5Uxnbs3jDyX42gRqa3krWTLRn",
  "key15": "22dzDtJtiPmPjiwymh3AEYmgTAskYLwMMfkm7EDaE933tqWs84yvopMLh2UD1HkYVFiUzngdnMsbwKemhn5HRRVL",
  "key16": "4UiiFRY9s4mMsKF4tjxNNQjMXVSK6DrKiXB4efTCaG18xXN6ba9GwSsAhrTQzz46pwSjAk1hrY1cBBW9w83wX3zj",
  "key17": "2PnvhxAUQgpmZiYqKGsUnYXZnbfNLKKcwKYtAxxD47YXKfbBmC1GyrB26FNQkBDAVXJv6AhBjwB3hY3agsDC2pv6",
  "key18": "sNKr8wDfSLVzab1WNtQZijzx7eQBc2VZQDYtbDPDiNqkbRHSCReRekM7GfEQMYMkRnRgCXek2zArZkhamuhAXoY",
  "key19": "LGVNaHbgXUpSUvBdSTMEP2MUXZzKKqCXdWysGnX5Ni4tp8yR9WpVHtUFeBnWsmbEKVh2USp9jLroercBzQrQdS6",
  "key20": "3RGeV4p2gcn3K9gJhMN5sJKR1Uh7bgbd3Z3KqnG25HsXNfmz3hqzm5AmSgZbxcCXDCs88zxY1gpc3v252PSJaQwR",
  "key21": "4XmoCWtR5uzxLzjAQsmnXddJmXrW4NPvQP5YFCYmGKxA458ytPMBz9BiTtmQCKb5RYGqxTSGGgUx54RcubUA6thu",
  "key22": "3gGJ5knhKCg77e6KLUjEm2htptYAgGByFqVtRSZAdaZRobBGmKTij8g95vqJASLag27vLLVyCZZ2ooWtP9Fd8L1M",
  "key23": "2ETDusrHTwfbkcervdYhX1QqHjeCSKsLw9ymJ3AmADbUVsxxdXSXWAbJBNve9NkWL8Ax1cjFenadWx34nC6HVxf",
  "key24": "5L6GT8ZmYz2FCGZzdA1c3LtMAA66S3rkWdntA3PA7VZgv9PTy5BBwZKP9YetZrZ1pcJzhx4AEd19hB1tKiaVLf1J",
  "key25": "4bUVpoFKRq8zkxTqZ35rTwtxjnj5463yS7A7Xaq1x2SJqw1yztJkR5dDUB2M9uB6JxwHN5LweQ88hgZRBS7eVfs",
  "key26": "x8ttrnPCpEQCsQf2XDnfabeYM6ogFZF9Xr4oMnGZqySE5HHEnTjNXk3CEMfZDgZhmqqD1Haj9dQFmRVyf2e9uy4",
  "key27": "65vzFvKWXWVnrrNjpMP12u67Zsxdu7b45LRFDHKg4hchanSBdf8xRWR5Hh8oCPZNduC8ysW8u2n1W2qnnQNS6zaR",
  "key28": "38cWEc2xWiYpdhD9YrgceWXv9BGJbBe6D2xn1ons3rmRtrJkxRZtHawaSwzRJbCQCncwsCPyyHRmbxSoXtcyDLKM",
  "key29": "2FHYM316fGWQgeXGshxAfCozzFsuEPWAAT1fTYj8CgVKRT9qDL2yMwPk9eHT5HmU2zyuzN2bKMvWiujfCXy1HLTv",
  "key30": "uBmvQdRepHnz6tUYNCW6oBmHZH7MzAD9VkoHtED9Egae2wLuDfSptGx6j12kX5VHdSTz3vmmjkbN7b3DEYWz6Hb",
  "key31": "4vNX4kzEpem35DqULZ4d1xbbvXRDAK4Y4D9dxRYC2LHZhcwtuZYdC66aevtSQDqTXS2B1cmAZRWLcWiE5JRrhcLw",
  "key32": "5uGa9aPnMiu2m59Zzmn5SiY9UUjipNammp28n4YAoLC9Z2VGEYE9wmsVXCZsn6uoF8J8jzUXQvC7Vb2qaXDMhuPc",
  "key33": "42JUFLwn73mM8oNsVUend7kTTTfbqp2zbfsnFdpsrFoiLXaf5FDt4C638TFfa1YQ6Svj3E1acYqeP6eT54EQikhf",
  "key34": "4miZM1tgndfok1iAV9ZksSEEQTEm9cZizt3rfFiK37YtcQYgWgHSyyE2AMginbSaEzzPisTkAokqxNSLR8r2NEEV",
  "key35": "3UCu3fe4iMehu7ZJJ9JcAKeiXPs1SdeaPQALsfJWe2fy1dCFBQ7KLAGyNzRaT7YS5rU6qa38MinnWaS6uXRaxYkz",
  "key36": "4BEXYg9UMvfyCgp9TRyBcXu3kwZn54GwiTetRaUYQ9x53MyKAU4u8kcLNzFULUwSJrx8ABwyg4xrvSPbrZqBnkvZ",
  "key37": "4NWN3TXrT1xJm2GXP5gK7UWui5dfGpUHzKMwJZjCxr2CayPU1xChvyc4wzxxBWJaPt9fwmd1KkBf9nFjKQL9amCx",
  "key38": "2XUvdoUnKjVLbxySRjsbmWuurESAHXdZWZxgMCG2edKzPP1EPKNXEw3TnmGHZBkxWeWUTESp8p7iNxQvsceMdLjJ",
  "key39": "5zBFDqDKstMda6WRPkhFJpPd8Dfxapra1FCmtmkY28ZhtWndQkzpq9XPrUWFxfpCuTvoucjjSsQhchQRkPzhuR7t",
  "key40": "2j3E6M4XHKRhgSjFTZ1q99d7ThD7jjkj5WrFSPxE3nEom4aQvcZhx56D81pRfoKWpy5C7USnFecsTEjnbAnpp8QD",
  "key41": "2JQoptX77cu3ciGybWPdNidSW2HWAmcaeza3693cQK8C3zN2A6HP7jxxrdtAcdm4vXKS7p9znUhjHuFUppjyd8vp",
  "key42": "5Pb78X9zvTqts9ARy4NRhRav7ouMr6XXqW3tgFgNinyHdkfBEAYjHWZoSrDmQPdhEBzMqmpMuLSGr1hAkGneYCnH",
  "key43": "2yGgxxP3FjX6xWo3CGDewo78zHnbofDwEheNr5kYtFcFZZp8KP1t8dQeqNVGpy6xdGbppTbvVbcA4uCRiBw4FvC4",
  "key44": "54dE84z8nDcn2QvQ12iDrjym7urkj7k5b4QbD2Zu8juYdrpM52BSu7sua2st6Bdkbiohhw2UBa5ZCcWSibB7tZVF"
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
