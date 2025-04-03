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
    "4EAteaZreqfzSme6Rxzrbeun7mnepWGUCXyyMswpQjeRUvYrNK5oqw2i2Jp5Nm8JTy6CF8eAbvg7M5s5hmXbDF3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MdQu8sKpA9wLP81C2btHHYhQ9qyyZt8vBmTrwAUddskY2pFdSLMwHVj8JHdAB7J3fLx2ZZA2NpD5ngCdzpjrH2T",
  "key1": "5bSVwmu3b7h6LFDQdFq9dWNp3ciHXE9eWmP9QZ4mSzkRKSrjYeMoe8RoqRRURbNYBU64s9WY7dPrakShN4vPPwXS",
  "key2": "5oqB57M3f5U3L6B21h8sm86H5NpCU7PZq85mSn43TBSbxbyxGoXwb79sfHBovWrRHXBB16Db3bkgje1DreQwvUUm",
  "key3": "3f4SbUfKYhD9wYUPJVWowiBBksFY21zQXBAu7YDrpHoShEVXJMU2unFe3R8if4tRSMCbhXZecN3ztMs9S2cspWWv",
  "key4": "4agKfLrCAzdi1Gj9mtRYKwmxumYpu9UDhuymy6xztjEUSkUteW9HS2Qta46e5t8CvzWv14hfCcrWTTEq1wNf2bYq",
  "key5": "2B8vURgta4PS7CQmYdyfnm446d6c6aB4gFZNnxaQgPcWXPhjbTASimVqPsugJ8ntpXhTMTRd9hTHySyhymd1kckF",
  "key6": "ho7UxsUUDcVy2TN6tNfp8nvfRjqhn5cATgq6zLFDE2EgXKQK2Rq4dUMWEXwvLYUgmxWBo8ZrZ7nNoPi1X73oHKg",
  "key7": "2B4EbQb1PBNd6qE2jW6MvG9CQTonroAsyvtQNSa9JLKLFtFgKzYv89kahgUpgigxogYA5mtwabfhZVyGuRtPrG9P",
  "key8": "sRzDcD2MmN8T96ic7yX9sPK72p2GhhAppENxxeCDdkEerdHPh4SnxnVJmFDmMonTKsyFyacuDFrroapVPXKjmkJ",
  "key9": "4NGFGzvTSTZVqyTRd4fJxwJibo2XRmCJm72XEKaXnojqySAzPdMPvLFLWX1BgMPiVVybeKF4UugqCqZTMHutChmw",
  "key10": "2DnD2st7LLrWWfv3PSDahzKoxfP9XVC3VNG3CUDQusDKY1j8qtRAQfQBPTNb9v8MaCf6199ofPhZUhkqrw1udbfg",
  "key11": "39gTPCRUnPsmjtsFwqtXtnoNrSHFE9FqdeTw1Xr4AcwZWqAJTRYjP6sZomPcb3aMMFi1ctXizMg5HVt3NYu5Y4kH",
  "key12": "NnpA9NUgqiyehU7AhhaFpXtey45w9QuJBJTQY4dsV1c4hBmU3F4p4XAXjiFP49v8w5iQAh7gnHe5AcpnrZwdjpx",
  "key13": "3PNsSxp3Piou5b1j5K6rpWbDaC378VWf66kCWXcgpYVQENEPwyi82NSP6ZXnBzt7w25ic6G42djq1WYScmj3E43z",
  "key14": "4t68uwvjDGCRBUvFETW663q6PRcHRYvKCDxaNqGL7JfgYcNntGCM4Su9pDoNdUodU15YGjmiXuiREhfVoPSY2zV4",
  "key15": "3eK1vcWEZn5hwNgFWk3dcv77KtT1omCpmqAKiEqT81cYK8GT71PC4aJ9sDm8i8wpDiMtedDVmP763iakBq8gXVcc",
  "key16": "RJj1nJcPiic7D6h5JCEXTdYxpfCLL58Sr4TiVaS54ekUFNrZMcB61ZNMin5zAwMsg8qYno6jDSkfX3KP2zpNRDX",
  "key17": "4pHJUWovLGsbF4AGef2bAK9vvgzK58W6Ty3ZBe94Ms4uGGvmS1fTHNLQHgReqxk9xuRf37LQEjm1peKMtettpEA",
  "key18": "2uAK8s1Mcj7jVZHWxPAtz32TZ6JX5iDLupqmT8Vr1U4m5EkkpiERdhxfHUzTQd3GiVSRSG7b27gjrvb5B1ZgkXPU",
  "key19": "FeUSd2edgnKMAAantW86ZLTm4E9ngUaRZViefjiekqeCdKyw2v4dDs4Un9cTdWysn9kWNX6s2HdtV8ymwaDS5dD",
  "key20": "5iazdrjqt2VpjgY9s6vTpc6PbyNcHxSPoZtjiz5qh9qG16YwxAg3hgA8TYa8pkzCtKjhbofBXFvH51GsEfbFfu6e",
  "key21": "o5q7hWnBmakGzyuUsQFj2HmK5r1UJ3Ctbey4ExSYzDRBYuEXcgF7rsJwywNj5crLTQCkUGGaDVohQ6eB3roh9wQ",
  "key22": "4WEQLqW22Amw2nW6Dv7qTM5VXiCK6NqqGVc4oUDYSLynJ4Sm2JUUduy4hjuKYxEMyhVCvLNinNcg1CS2JN496Jk5",
  "key23": "vCWWjxZhRFDo9DLSCCUaF716WjLNydMDziPFB9MHpe2oJkW5aC9RkBe8HF3CnhjaZvFGZiL7UUJEac3UhEXD26V",
  "key24": "5RYK4nYjweVE58Umu7yEL9SuiFQCNHzLvDvyWKDK3h398Ui57WVShSoU9jZ72kz8YEERVJuwanABnaLbtpdeM3r9",
  "key25": "4g1Ad1wbVs1BvPHQKWgrhusPA7hZbUY3RhkURkCpfQfnPVtxN7ynmmcrRtmb6ZrjLzksVUN7LfHnkan7YoYYsjhZ",
  "key26": "2CjZYX7jdKCDhyDvwhQ1omwEo1RLtPYLan1vFLfanXj8LW7Joi31sUJbyTWLNP2BrTUpYjnZLzJe4RokGT65H17Y",
  "key27": "26i7qTtVQtGgYo5KaPNEwDtt3DtAu5LYUPLSQNFNAQ9tHxJbryjGCyNjbsQh7ygFvpC3EJ9UNDs7qh1JAPadPktb",
  "key28": "66RAgxS76aWq6UphFiQQ1E2H6MAQ9x82eVNYH39QXHpcVuerooCMB6UVyViDv78VtBWt7vnvweE8h4yDJ5rmz2Et",
  "key29": "5XKpfTjVqArA7PrnNEGrHAjJ3v91CruX5bJzCKG43QZtEVgusgh5rarFnVTsPytViK4TmNFhUCkxn9FzGh7FvEQC"
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
