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
    "qrEQfTDnPcG3KpiEYohf8UkNL1U25mUD6pobKkkW9pH6GXjSfjv1SAj9zMHHEfVYgc185Sb6zFAwo3FZfsph8Kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hjWoXzUfoJcRNuKLDnaRoqZW7KXGwknnb1uz6peyyrgYKnju4n5bbHzV19C1EXzH7hqnjkRSMz1QusYUB5jRFMG",
  "key1": "5pzrUPFiES6Ha4YrXFsDeL2k6ncFLWQEpGJDefTdmZtAYN7jLf3uTrB3nqk3c8Uz7ftSrG4qBFxeuiwzHfK1Txe5",
  "key2": "2fBjZydxV1q8BuL6QrsmZwNWQjBA3aAnYVGjWV3PTPnpg6ieKvzV3Hx5hdJWcAvwFMHg4dxaa2UND95Krr5avM9z",
  "key3": "3Gt4oWzhBVeybhdzZKDd7gnCFpgrKY45U4KrFteTdrQsL1Up7g6axdht5EmySyASRaZusKbXsZKt684KbynmR6Wm",
  "key4": "5hBAKsSFWdUH4ka1ZeymTRbZaQH1GfAdr8hx2Xs5f9CRVNbFtyu2SVPtZxTevG2UvuCy8X3wLFk29Jj2tNRB8CoK",
  "key5": "5KFvN5kyRvWTNvbAB4ezavYPedrtDwmeT5Jv3DqsbyqGLsdqGcMcs4hqb473iop6zuHs3hRtHCfSbEaZgCQct1Ub",
  "key6": "Rq6SMCDbgtLFSyGz8t6bdgrfAvhswkzP3ZXYJRQi1UJs3zDVZUk8eemyzBFrqxC5UiiDVAbVD2ZmgvmoaZP9ap7",
  "key7": "5m3u7X5cgvoSnR21Vydv7fSoiF1wgj5rV8Y7yWZrPmmPAJChcpgngEhKBimeqSgGNDESTcbT1L4wheN9pvKxMsPX",
  "key8": "2cqnXcBSicbwVYxEkPmp32MfMkR2Ynd48eyC4Gc14oxi7YPNC3ajcmwScQ6piyNeYoPsNuzqvyRB5i3ommCAcP7X",
  "key9": "2YEzXogTo74t3dE21M7hQ5Wa2oKoFdhxtyeCaQazhjGwjYpuM98HzTUPyCHRfXE2BBdWWUacs3bXUaW9zZF5211Y",
  "key10": "3pP43nvtHz4RyDA9HCSyzd54LtUwyMswxs7zBdS2RLsbHjH9avTY9JrfeP56Ywb6CXw8ZHqTynNFrhFrDMAe9Dt3",
  "key11": "SPX7TRAk7gUYHybJrqLMCS9ajpLfwPrhDDsF4HKT8FUjUKwJnzntm2hURdYTw2mnMuWLGSb9Gu52dH5NJDyBoK7",
  "key12": "5XSQkKaVw7YYbsNCpF9UT7e64ohXewDJFykQw2FsnHvvhecCRJDKteA2wEQ4AV1CkbjUZ5iC7i5GxenDPNtonRy9",
  "key13": "61v9yMwt6zr9z7ds3rGBggWMBPNssg29R944mdbC47HVkhPGhYG8S3BLcaDC9ron8p8B8HRLK7ovZd8jkKQbQCkE",
  "key14": "67V99KBU27wyBgYxHt5NpoJqMsemD1Kj4qcYLEzY1fuX6ajJx7ScGVeq6od6FFU6QuqugtpGnYEc81akKqH6iQpW",
  "key15": "3jXrmJT7cJDaDpcRCvSmu7vaBVnpKZUdua16VoYF1iZpuSwGEP1NW35zgDxrSDRym69fZHZRQtvjg1tbYBG5BGHf",
  "key16": "3gMQscyjgGtmJmjFbgeUsRMZzUtraRWmYfGaQHTGUdasC8hqZ1pSDbE78gTdxnjEWdKTFD4Yvdri5prHRVNSf5Jp",
  "key17": "2jxtEqLaathS5WNESHEbLbaDyWchRXWMy7dYFV2kSXBkBQXZ9VmSQsmcodTUAK4exvNzX3HTLtsVrzAHSNMXaNye",
  "key18": "3PtJV1rspGcYVMws2xppjJ2t4AeMUDa4ssrEyZNNNhXfiRHUUZmSpWK6FhqiS9rA6CrfnqusE7BkJ1FKKaPBQx8K",
  "key19": "5SPSzRdoxNSh3zUm4oKgsDs1VQdkcJbFxWrF6D3YkDobVApoGxMRkKXRCtZsKR4Cp6XDvoin6Q6JMZxgLd72CRzN",
  "key20": "5AnjUD1zJ95EcMxASea9yqJqkTmT98feY387TKTcm9zX2EdpEs4stZgBN2aEVXSCTmpMyV1KaHhsDHgomtkysWy6",
  "key21": "5mneQdfhn9ZyQnsDBcTQeaEqYhrTbDa7keNNkP1ohVVxw83TJEqaJxNwYp2iwwxJaejrj8QwzRzag7ESnnNZqyfV",
  "key22": "3v99GhrXbMVY6L9hFGXUyksPfPxdDeSxdLLk3BkkAMuux26dxUmQTMUmWLyF2MShY6ANHGSnUoYiQ5WHGF5gQz6w",
  "key23": "3SrkjyzBbieeQdqYxhWKArzbP4sDNniowsWqqgKmWLmGKciMbiPG5ox1quRoUVdpCd7y7Qbea9Jsr1FJpRXTCa1x",
  "key24": "49SPoy7K6iwkAM3SZdJy7NCKdzkZ3tcgQCedHjMtP6TCG6N4LYwvt9uVP5hnRVYDFFgXGgRVS1rDZHxi7mkxn2ce",
  "key25": "2LYGusGdMXoyAsaCgznhtPQKq3bVYyxWTv3DU3Kb8GPNYQNQFubgEVsJ7B52aADPpAE9N8VwaVr4ytiDyX6pmUwP",
  "key26": "4iKoZiutYxftdxAyQezkCc1j7Fx4jFtbuBU8RTp1nhSJybDRQy323pLLvZbdgU36AseT9p4BVRT4RgjoS8AEHiHW",
  "key27": "4FHF1yepVE1qMHxuENeS6XyxGaJLzx42QruxeXfweESEpgdsypjjHpKTQC1RsM3z7ySPek3QAKSNKJ52r7YiGTJk",
  "key28": "5gaePyTGdgJSi54GemwLZQaQb3fKCmgWzhuKCHNeU85br7VwUjtiALXorLuG1hvDyrhtohBmx2pzPjHZa9mpxmfA",
  "key29": "4qbYfteXH1VodTLJ9T2AXQzhevD44was7ctANAN3CRhLs1XkdcjdZz5K38jU5Y8oD7M1bcXXwvCNnbyqTTUApvfE",
  "key30": "5ifYHuGMiUvg2AxwQG4RkSkbZXQKy77so5wHyJswbHWUqwTNFFmCLmtmNx5Vk5uuFLpvyex2rRGAfSZ2dji1BBf3",
  "key31": "5N4aSMuuRHQiyRUrLEPGjrr9f1nE146NW7C2DWYrjC7oWhov6rqxC43pPrthBYMKz6pzKcg92DTUBRWudt4XctTQ",
  "key32": "4vd4SJ84pfgzcEk2yqsadrHavJKinNwY6LrnCHW6ZajE5Rbkdmu7URvjytvRXdPFnw311DWSjPGPtf4u4SuRR4ae",
  "key33": "aiEQYQLxypL6rjRBR2LkSDbbc5NjnaooYfgoquk4J5srNUakTdxMdVwaAwEp9XJgU2P2xoNH1nPu6rtqN3xiq3y",
  "key34": "2ka5b1gLaWDznEeBpspnuBSzB6PUwtj4xMqcbmcpE4VVa62vCKcYjHQJvNxTTjvbT63G6o2eXXGmPMVHUehJQDe",
  "key35": "53HCY7gKY8anbbj4q7YLRnLVxAswrEdCinTsXGnZiHrynqyyzpYTi7Y4mCU689bMauMRsaETnJYuTSJq17jyJYnE",
  "key36": "28MpKxcTwHWJogy8Y22p2kRBzPcoPp9n17ZgrU94CsA4NqcaYs45ENfGUV8doi6fTJCfmz5RbMi8keYPz8c2pa6q",
  "key37": "5TAyjbXY4GBVTJ4WwWXQ9U23Za4Tuwmz19fknJdnYMvg3KAR6795QQrAvpZsDn7wXEeombgJu6itts1hyX5NXV46",
  "key38": "eUvBxW4oCNDTBB4qTqL4QQJTrMttJ3GUpETowzodheHaFMXJosoKWCwzPTnkdM4ztyqgFAhPkN5a2bYxCDgi73B",
  "key39": "2rS7aGeDUJiXHG5tRzFh8u7TEJPPT28EQ6GStJSvb9JQyZTyPB9y1tSiQA6mgdDaoB3Wvtk8ndRjpT7txAGZYJNY",
  "key40": "64r7QcB3QZb731qY5WSprZHNat9HpgxiynvyitSn7JaGJZGctqmM6oiCc158FKvTZmGxcF7XjkTnYMFZr275EzRg",
  "key41": "ZNvJQdhML4qwPK61bExyXAFLK6kiYP6ymRkcC5ANKWWjA6qSdYQZKgAoMVJW3ZTP4eViMb1t8JeW3XVCy5ukRVV",
  "key42": "3yCA9sjzLqG1ecj9Lqb7nXys5ixc41tsJnmUewf29idFqpXJ1SFYjEN16kvefaWsVSm8jqh4zkTefteX2n4CW9kB",
  "key43": "5Jc99bB9ptXtrNSGLyQvjEZKimYyQqQzWpK4wPNTedQkQ2AwQimG4zQVSzvzrCLjPrYHJYeFd4aE1XtuJ8GgGtnJ",
  "key44": "2fbhaK4VtV6zYgVGnZ9B47is5X7stXkjFmjqLVx7Ra4Z5NtEmRfv34w2JwfdyC8gGMky6dvQQZm2hzDkWV9u8bgV",
  "key45": "4DFNA26A4UiJqua5YUkynBwZ8d7M1K85XGBTxxDtxiURqFVvEne82yGH2wbWmP3r4DNssNqAUgiBLA3ERDUnSFAz",
  "key46": "3UU71ggXKgtZwdmNZxzsqGULC9ziecxzEcg3xggUtfsmDH8szGVGPJMqSrTpCYQZUDbaZMgxm5z1KwE3c874Xery",
  "key47": "613jkCihhPPFL4bbVA9sjdz2paVckoukTwYp2hSAbNvrRMQm365xANVuYqx9to9exiYCuV9c3vzASVgA1PYG7Cza",
  "key48": "3Dse58Ce6TqmXjh8ietcvp36ejbRGT37dJnBb4hpdVyb5kcwkxz4mpJG1Mkoq6PStytP5hWjVHFdPg7zCGs5zbNt"
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
