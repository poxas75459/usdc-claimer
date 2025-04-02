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
    "BnWCWq3gNt9eN1aGYrfbW1e5ehZR1JHsG1oibgo7FVrvm7fRoWDHabhTA9Q17SkLKkJkXGZdZ3sHqyv75tHGL1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oiUTyF85op9Qu74b1W8T5kcb1yHZxBAxZJsxX2sQAkR95znhWSS3kHiNWGqfT29YgpVB2vBsVNV71fEDQMYGpeQ",
  "key1": "25GziNi8h93re7mG9ad7kV6j2KGMxRzFkNLrJy9pRh14cn7drD5vsMoCxG5LCULfyu19VrDTk7s8TspemQA2Lxeo",
  "key2": "4BAX2FJ174ZSxFARfsb8vXS7M569PC5r6rtWrbx7QMqkS636pfbGj7S4FwejvXHNFELyDjTmv3t4jgTMycSkwzMU",
  "key3": "hTs8Nr5X5zUq5EVqVhvxwJ3vrJyip8DxWNTXtZxKMxVLEowj8zBwZEfMJVpQfnFt23pksKs1NkxKmhjQfBUHJDJ",
  "key4": "xTnfsb6BwYKMccXw5zqf72oBFb16wbVZib6VGg9nAnmvhPiURj7XqH9m4NFMaZP7fZgPCDLP8uNVBh41u5YWx2y",
  "key5": "2pP8Ju3pvxJzLapPqXx8rLTTnHhL7pdU1wnzFyqgaeEcpYndStYpL9fHiWHwA6VjoNkPQYhz5ekFCuEVhDWgK42w",
  "key6": "5kK34SBzmWCS4CejiUPw7yWosxd9AXn9UDxqJe838hSRtKPUUH1hTCVNh8nizzoMAt7p2P3S4vKhkqVLBTD2NR8M",
  "key7": "LL7tzrap5rwqj9TrK5RfZuXYj6LGbzHND5ZoXyQvQX5HcBeayPTv55qaYzmcyFdQr6BcLH2TjXCntLzuSMiYG3k",
  "key8": "5L5Qgoyd5HDMAEJaxALXevS7GodHsWS6XWabdxk7L4KXf8ePAWfdtLK6KGzsaeNxrYPWp9QiSV5yYFFVHoM7obdV",
  "key9": "48WxRcgGijMYRnTqb2tixcX3MYnMxGiSU9C9K3JmZwAftaa3k11NWeF9RfaLCyc3fS8H9tBf4J4hWZraxRD77Fkz",
  "key10": "2yHNxUvfUEz5EN3hM1RqqSwizeEGNxTFZy4qUSfG6DmMvF9FFqzhzvX5whbDVDh5RhT7X4Bba3NxtDWgRLx6n2Pz",
  "key11": "3fAku9a75h4c9jF7go1TSk5kgwd1S9kdVjvhwpCGBrsULiySfzABHVC9SZeVep8Cp7MwTWeQ4AQrdgeY1N88SeMJ",
  "key12": "4VM5NLcJmykonFgS735gby8BvLcHmVo6Ggx6yDTBqX9VBdMaygnPnxLR7PPdCtFWutnFynJTkevT3Ed6ghWNAF64",
  "key13": "4o5fSPjnUhyP3rRjzQSLE58FqHsuauJEgLPUmecGUkLzGR4mJhGdEhTbijzsSJoA9TrSXZfWJCSv2kqYLomcvZeR",
  "key14": "5YfEev73Cg6ACFtfkYDxc2tFNMfLcyJDpnzASaBLM6EoAhjt5YhkNzSW8TxQpby1puxqb52WxwgTSSm23857XMqY",
  "key15": "554B4rCzv2qsGqN1YYBmJiC6FyuwbQwQ58edpo356sjCUiDx6NcCi7NUWPvUS5EvVapyygom4iNskVZoVyg6b9oo",
  "key16": "4fBc33vBWmEpePTBuFG2HNnMfK2gJSQKJSbktPaYGAAL7ECFXmUtLJogNgS6ihDW6jG3ShHW7ke5ggF9gUyPi9eY",
  "key17": "3Kgg8zwfUG1ZqSmfhUQcY8hNjKqiJ3zXn1X92nvp3owmbHKKhczAzf5j2qJbze74XCqaaZRnz3Swy27WnoCkyhsS",
  "key18": "5GBibSDF9kXV64tVSH5ChHrpKL61Xfxopi8zHqrUTpuMN6xjwSjC1h9UUQhAymW9LisFsJbvh71PVCzv6nbQwug8",
  "key19": "4ya9nhmzoAD2EQcD2Ho6vG4BGerkarfLm75j7a9KaNAawP9XhSZhusTYZW7UaieXFD1K2vjAsdRJyeMpUtrAGXdN",
  "key20": "473U9AoEYA2xWQYS1PC82MqqjztY5H18aLyLsbaarqBg4mU3zhPEEbFhTo1KsARs6M1Ac9b6CMs9uiCaumwWk7qu",
  "key21": "4HgWF7YosRULsYTMAzKwHgiJNkXDYQgwDcxyAd6zMA4FeUERSPznr488W8LE8Np8gNJzTUiTXQbQhUisueitSTij",
  "key22": "4ieZzwFd3tZX1cuq1TXodunKhXpVFZYRfEjxfzEgdmykN7FZzfGSJB1TSfza2UCVUwKC4nvCmBL1R5BvuVMdFDFi",
  "key23": "2amVNKyJ1jh569yjg29hZ3DmvNcCW4kh5iDooo5kD5aQLspnShreRDYwsQrCZ74TxBnwm5zRuPSL1D7bZiz7qNJA",
  "key24": "2rrzA3uyX4TPJPSRwqzEd1zCEXLWnupTkFeoACzcP54HR7bq4X7Qfr8VZjGMzmQ6mow7rqoc6cVDA55KfSFvrtu1",
  "key25": "3Hed6tDqneuGT2wmhV55oc9SJyBojtW58YXUPHoNPGrPJc4F49Z8Y4Jmm72xne4iv4j3xahxT8VtePZVToqNPgim",
  "key26": "3kbPJqVnCX5UbSZ9ZgXHbQAjmwrFuVSTUaq1q4YhVcVxdEh1ZfSJeNsKevdcB9niHCGSgjecXdRrZ3GQrfbzoF4H",
  "key27": "2meFoWLzzKQ6zN9QvQWW6fq6EiGyYtazDQA4BkDU4KEcH3Yx5tr9WkBZaXCywJnFGg64xbuLYaTKe4C4Caw5CJWF",
  "key28": "43rWjwUYtQirQnYr3eoE2XJfe2PufRRBvVETN9Urex815rPdP5qnxc5hSJAU2U4ptSzXcrjHSZ7mAgzgayPrTAvH",
  "key29": "5hna82h5G2Xze9fDjezoxXRwdJ1iwwpCkkfp2e6C88RkAPd1ruxh4cGqx1sgK8RFebqJUnyvdHXrH7vNjz6wsquw",
  "key30": "2nAN8DsJwp7UWKCip3oYxnTPD2fYZfj2eA1VAqj4zxttf2irSjgJFD2w7zbx9cdr43XWKDeqtV3auMid2C6Je6sR",
  "key31": "2fkBFQR48haifZkYsgH8hmA7JVScdCE2edNoyV4BXAxH7w12Mrkie2D17YQpJ54C9Y6eLrTSoJ26RJZj8PcUC3Km",
  "key32": "3EKoSfSVeUPcTap2iQMpqcPiAwwP1jemXEueX9NUCoif2pAHWTP7mBEwvQAJk3Y3iNnNQ7Sj1vrDRb2F8afSjPme",
  "key33": "4LYK5KLq1QB3PHy8w3iBiEc9x1xcv1wK8ZoX7QH9F5E8yxPKQYm4SdcjTc3TD2Q6HGi2e5XS9KTmUayu8dMTXqjh",
  "key34": "2U3dvLUfatGAZus7iB1KZ8oCaNLGKyjPVA2E2jqb4CKoU1swwwNy1W7AzLdikt3gvURF6Pz6scZ4jJVWPZBmYDoZ",
  "key35": "34FRxXLAb8iHA6v1VSf3Tg81r68Y9jNbzgMdPg39EH2PCqeTKLzkVWR3ZPc3X5QnbiZUU7VGb46PSRgVs2kqu365",
  "key36": "4dpfnQT7QgPptcQKEsQ68d6MQQLgfiS3dgQJdgi6UHhYHxMThrEW9KnxSWGbeGzawMh2Lau7LZ7XUnLo4ektWW2z",
  "key37": "5jwEus8Bqj5k8MKoufDmD17xXBW1W4Gvdg3wjGHBWyrs1jLHjcDbmSuLi6X3EvtqZwLSfiyZLpf3s8KnuHEV3RGB",
  "key38": "39PvAiYnbjqgwghduf45wUUwSdHtmNvqsm33YsGFZUGnoouVq4NEa73oDR9sjYSG5Thyf2YyQtZQEUNeLCL5xf4g",
  "key39": "5KXZSeSUx1hqiB6iXqrSh9k9tcBzarPrvWDhaNvgSiZvm37EgAju4X95dquCn12zNBF919uL3XFnPzpu4vqZyVBi",
  "key40": "37wXsZypNRozk5upNYfAoZJmVMZKWSDT3D4dvMZAAttuCX9cy7BcicURvkqKbxQLPD5EKm5i8z42TrHJcKQCoD9N",
  "key41": "5YZ1KwuF3JdbD36ajZBAPZ91esFztYmeVmebTukyyUivWw9zQT3cDFQMbPwq4Ux7HpjJUPekFZAxaZABG9XWa1cz",
  "key42": "7DKCxGaAQt3fKAQMSQrKrnJ3Kp9zUxRpEX55e9pazdHTt44r8DF2wzfrDeKVRbX1KR7xWsWQL9h8tMoPzDQUNhG",
  "key43": "YptYNvqqzNnioTt6jYccGefG1ubvw5rcGWiE9aUgwsd9AvA5RZsnd7ttNrYZP9MVN84gskh8DKA485DzwaG2jdX"
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
